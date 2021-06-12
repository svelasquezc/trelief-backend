config = {
    port : process.env.port || 8080,
    dbUrl : process.env.DB_URL || 'mongodb://localhost:27017/TRelief'
}

module.exports = config