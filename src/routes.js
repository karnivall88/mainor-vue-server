const AuthController = require('./controllers/AuthenticationController');
const AuthControllerPolicie = require('./policies/AuthControllerPolicie');
const UsersController = require('./controllers/UsersController');

module.exports  = (app)=>{
app.post('/register', AuthControllerPolicie.register, AuthController.register );
app.get('/users', UsersController.index);


}