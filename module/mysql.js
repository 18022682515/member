
/* 过滤用户输入 */
function escape(obj){
	Object.keys(obj).forEach(key=>{
		 let str = obj[key].replace(/[\'\"\\\/\b\f\n\r\t\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/g, '');
		obj[key] = app.mysql.escape(str);
	})
	return obj;
}


async function toMysql(sql){
	try{
		return await app.mysql.query(sql);
	}catch(error){ }
}

module.exports = { escape,toMysql }