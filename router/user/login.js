const { escape,toMysql } = require('../../module/mysql.js')

module.exports = async function(ctx,next){
	const body = ctx.request.body;
	const { username,password } = escape({ username:body['username'],password:body['password'] });
	const sql = `select username,password from users where username=${username} and password=${password}`;
	const result = await toMysql(sql);
	if(Array.isArray(result) && result.length>0){
		await ctx.session.set('token',username);
		await ctx.session.set('username',username);
		return ctx.body = { state:true,username }
	}
	ctx.body = { state:false }
}