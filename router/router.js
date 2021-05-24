/**
 * 设置路由
 */
const hasToken = require('./hasToken.js');
const queryUserName = require('./user/queryUserName.js');
const verifyCode = require('./user/verifyCode.js');
const signin = require('./user/signin.js');
const login = require('./user/login.js');
const logout = require('./user/logout.js');


module.exports = router => {
	//参考koa-router

	router.get('/',async (ctx,next)=>{
		await ctx.render('index');
	});
	
	router.get('/hasToken',hasToken);
	
	router.get('/queryUserName',queryUserName);
	
	router.get('/verifyCode',verifyCode);
	
	router.get('/logout',logout);
	
	router.post('/signin',signin);
	
	router.post('/login',login);
	
	router.all('/test',async (ctx,next)=>{
		ctx.set('Access-Control-Allow-Origin', '*');		//允许指定网址跨域访问
		ctx.set('Access-Control-Allow-Credentials', true);
		ctx.body = 'test';
	})
}