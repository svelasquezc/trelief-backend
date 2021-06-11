const Model = require('./model')

function addDriver(driver){
    const myDriver = new Model(driver)
    return myDriver.save()
}

module.exports = {
    add: addDriver
}