const {User} = require('../models');


module.exports = {

    async index(req, res){

        try{
            const users = await User.findAll();
            res.send(users);
        }catch(err)
        {
            console.log(err);
        }

    }
}