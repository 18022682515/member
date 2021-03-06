const md5 = require('./md5.js');


/* 过滤用户输入 */
function escape(obj){
	Object.keys(obj).forEach(key=>{
		let str = obj[key].replace(/[\'\"\\\/\b\f\n\r\t\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/g, '');
		key==='password' && (str = md5(obj[key]));
		obj[key] = app.mysql.escape(str);
	})
	return obj;
}


function check(str){
	return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,33}$/.test(str);
}


async function toMysql(sql){
	try{
		return await app.mysql.query(sql);
	}catch(error){ }
}

module.exports = { escape,toMysql }