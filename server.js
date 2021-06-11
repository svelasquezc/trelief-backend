const express = require('express')

const db = require('./db')

const router = require('./Network/routes')

const uri = 'mongodb://localhost:27017/TRelief'

db.connect(uri)

var app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))


router(app)

app.use('/app',express.static('Public'))

app.listen(3000);

console.log("La app funciona por el puerto 3000");