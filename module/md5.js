/**
 * 不可逆加密
 * 一般用於用戶密碼的加密。
 * 加密後存進數據庫，驗證用戶密碼時，按照同樣的算法加密后，再與數據庫儲存的密碼對比。
 */
const crypto = require('crypto');


module.exports = function md5(str){
	let hmac = crypto.createHmac('md5', '123456')		//获取Hmac实例
	hmac.update(str)																//添加需要加密的消息,用utf8解析str
	return hmac.digest('hex');			//计算加密得到消息摘要，并将消息摘要转为hex编码类型返回
}