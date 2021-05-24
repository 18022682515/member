
module.exports = async function(ctx,next){
	const result = await ctx.session.delete('token');
	await ctx.session.delete('username');
	ctx.body = result ? { state:true } : { state:false };
}