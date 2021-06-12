const express = require('express')

const config = require('./config')

const db = require('./db')

const router = require('./Network/routes')

db.connect(config.dbUrl)

var app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))


router(app)

app.use('/app',express.static('Public'))

app.listen(config.port);

console.log(`La app funciona por el puerto ${config.port}`);