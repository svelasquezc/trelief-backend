const Model = require('./model')

function addDriver(driver){
    const myDriver = new Model(driver)
    return myDriver.save()
}

function listDriver(id){
    return new Promise((resolve, reject) => {
        let filter = {}
        if(!id){
            //reject('[driverStore] missing id')
        }else{
            filter = {_id : id}
        }
        Model.find(filter)
        .populate('goals')
        .exec((err, populated) => {
            if(err){
                reject(err)
            }
            resolve(populated)
        })   
    })
}

module.exports = {
    add: addDriver,
    list: listDriver
}