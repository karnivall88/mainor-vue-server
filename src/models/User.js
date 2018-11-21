const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));

function hashPassword(user, options){
    const SALT_FACTOR = 8;
    if(!user.changed('password'))
    {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hash(user.password, salt, null))
        .then(hash => {user.setDataValue("password", hash) });
                //     .genSalt(SALT_FACTOR, function(err,salt){
        //    bcrypt.hash(user.password,salt,null,function(error, hash){
        //    user.setDataValue('password', '77777777')
        //    bcrypt.genSaltAsync(SALT_FACTOR)
}

module.exports = (sequelize, DataTypes)=>{

const User = sequelize.define("User", {
        flat: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING

        }
    },
    {
        hooks:
        {
            beforeSave: hashPassword
        }
    });
    User.prototype.comparePassword = function (pwd) { return bcrypt.compareAsync(pwd, this.password)};
    return User;
}