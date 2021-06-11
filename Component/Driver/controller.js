const store = require('./store')

function addDriver(name){
    if(!name){
        return Promise.reject('[userController] Missing name')
    }else{
        const user = {
            name
        }
        return store.add(user)
    }
}

function listDriver(){
    return store.list()
}

module.exports = {
    addUser,
    listUsers
}