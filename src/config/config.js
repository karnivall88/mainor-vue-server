module.exports = {
    port : process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'flats',
        user: process.env.DB_USER || 'flat',
        password: process.env.DB_PWD || '00000', // SIX ZEROES
        get passwrod() {
            return this._passwrod;
        },
        set passwrod(value) {
            this._passwrod = value;
        },
        options:
        {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './flat.sqlite'
        }
    },
        auth:
        {
            secret:'mysecret'
        }
}