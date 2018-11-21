const {User} = require ('../models');
const jwt = require ('jsonwebtoken');
const cfg = require('../config/config');


function jwtSignUser(user){
    const ONE_WEEK = 604800;
    return jwt.sign(user,cfg.auth.secret,{expiresIn: ONE_WEEK});
}


module.exports = {

async register(req, res){
    try{
        const user = await User.create(req.body);
        const userJSON = user.toJSON();
        return res.send({user: userJSON, token: jwtSignUser(userJSON)});
    }catch(err){
        res.status(400).send({error: "Эта квартира уже зарегистрирована"});
    }
}
}