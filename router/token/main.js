const hasToken = require('./hasToken.js');

module.exports = function(router){
	router.get('/hasToken',hasToken);
}