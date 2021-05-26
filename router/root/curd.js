const { escape,toMysql } = require('../../module/mysql.js');

async function getUsers(ctx,next){
	const pageCode = parseInt(ctx.query.pageCode) || 0;
	const sql = `select * from users limit ${pageCode*10},10`;
	const data = await toMysql(sql);
	const [ o ] = await toMysql(`select count(id) as count from users`);
	ctx.body = { data,count:o.count };
}
exports.getUsers = getUsers;

exports.create = async function(ctx,next){
	const { username,password } = escape(ctx.request.body);
	const sql = `insert into users(username,password) values(${username},${password})`;
	const result = await toMysql(sql);
	ctx.body = result && result.affectedRows>0 ? { state:true } : { state:false };
}


exports.update = async function(ctx,next){
	const body = escape(ctx.request.body);
	const str = Object.keys(body).map(key=>{
		return key!=='id' && (key+'='+body[key]);
	}).filter(val=>val).join(',');
	const sql = `update users set ${str} where id=${body.id}`;
	const result = await toMysql(sql);
	ctx.body = result;
}

exports.read = async function(ctx,next){
	const { username } = escape(ctx.query);
	const sql = `select * from users where username=${username}`;
	const result = await toMysql(sql);
	ctx.body = result;
}


exports.deleteU = async function(ctx,next){
	const { id } = escape(ctx.query);
	const sql = `delete from users where id=${id}`;
	const result = await toMysql(sql);
	if(result && result.affectedRows>0){
		return getUsers(ctx,next);
	}
	ctx.body = {};
}