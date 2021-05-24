const debug = require('debug')('verifyCode');
const { escape,toMysql } = require('../../module/mysql.js');

module.exports = async function(ctx,next){
	const body = await signinFilter(ctx);
	const verifyCode = await ctx.session.get('verifyCode');
	if(body && body.verifyCode===verifyCode){
		const sql = `insert into users(username,password) values(${body.username},${body.password})`;
		const result = await toMysql(sql);
		if(result.affectedRows>0){
			await ctx.session.set('token',body.username);
			await ctx.session.set('username',body.username);
			return ctx.body = { state:true,username:body.username };
		}
	}
	ctx.body = { state:false }
}


async function signinFilter(ctx){
	const body = ctx.request.body;
	const user = escape({username:body['username'],password:body['password']});
	user.verifyCode = body['verifyCode'];
	const sql = `select username from users where username=${user.username}`;
	const result = await toMysql(sql);
	if(Array.isArray(result) && result.length<1) return user;
}




