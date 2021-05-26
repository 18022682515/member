const { getUsers,create,update,read,deleteU } = require('./curd.js');


module.exports = function(router){
	router.get('/getUsers',getUsers);
	
	router.post('/create',create);
	
	router.post('/update',update);
	
	router.get('/read',read);
	
	router.get('/deleteU',deleteU);
}