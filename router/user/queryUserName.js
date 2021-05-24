const debug = require('debug')('queryUserName');
const { escape,toMysql } = require('../../module/mysql.js')


module.exports = async function(ctx,next){
	const { username } = escape({ username:ctx.query['username'] });
	const sql = `select username from users where username = ${username}`;
	const result = await toMysql(sql);
	ctx.body = Array.isArray(result) && result.length>0 ? { state:true } : { state:false };
}