const joi = require('joi');

module.exports = {

    register(req,res,next)
    {
        const schema = {
            flat: joi.string().alphanum().min(6).max(6),
            password: joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))

        };
        const{error,value} = joi.validate(req.body,schema);

        if(error)
        {
            switch(error.details[0].context.key)
            {
                case 'flat':
                res.status(400).send({error: "Формат квартиры не соответствует правилам: KRT###"});
                break;
                case 'password':
                res.status(400).send({error: "Пароль не соответствует заданым правилам"});
                break;
                default:
                res.status(400).send({error: "Регистрационные данные введены неправильно, попробуйте еще раз."});
                break;
            }

}else{
    next();
}
    }
};