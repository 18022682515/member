/**
 * 设置路由
 */
const userRouter = require('./user/main.js')
const rootRouter = require('./root/main.js')
const tokenRouter = require('./token/main.js')


module.exports = router => {
	//参考koa-router
	
	router.get('/',async (ctx,next)=>{
		await ctx.render('index');
	});
	
	userRouter(router);
	rootRouter(router);
	tokenRouter(router);
}