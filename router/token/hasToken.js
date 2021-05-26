

module.exports = async function(ctx,next){
	const result = await ctx.session.get('token');
	const username = await ctx.session.get('username');
	ctx.body = result ? { state:true,username } : { state:false };
}