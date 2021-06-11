const db = require('mongoose')

db.promise = global.Promise

async function connect(uri){
    await db.connect(uri,{useNewUrlParser: true})
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err))
}

module.exports = {connect}