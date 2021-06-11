const store = require('./store')

function addDriver(name){
    if(!name){
        return Promise.reject('[userController] Missing name')
    }else{
        const user = {
            name
        }
        return store.add(name)
    }
}

function listDriver(){
    return store.list()
}

module.exports = {
    addDriver,
    listDriver
}