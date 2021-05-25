const { escape,toMysql } = require('../module/mysql.js')

module.exports = async function(ctx,next){
	const { username,password } = escape(ctx.request.body);
	const result = await toMysql(`insert into users(username,password) values(${username},${password})`)
	ctx.body = result && result.affectedRows>0 ? { state:true } : { state:false };
}