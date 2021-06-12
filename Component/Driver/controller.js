const store = require('./store')

function addDriver(name, email){
    if(!name || !email){
        return Promise.reject('[userController] Missing name or email')
    }else{
        const driver = {
            name,
            email,
            goals: []
        }
        return store.add(driver)
    }
}

function listDriver(id){
    return store.list(id)
}

module.exports = {
    addDriver,
    listDriver
}