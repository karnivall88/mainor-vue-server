module.exports = {
    port : process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'flats'
    }
}