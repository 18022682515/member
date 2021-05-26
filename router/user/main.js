const queryUserName = require('./queryUserName.js');
const verifyCode = require('./verifyCode.js');
const signin = require('./signin.js');
const login = require('./login.js');
const logout = require('./logout.js');


module.exports = function(router){
	router.get('/queryUserName',queryUserName);
	
	router.get('/verifyCode',verifyCode);
	
	router.get('/logout',logout);
	
	router.post('/signin',signin);
	
	router.post('/login',login);
}