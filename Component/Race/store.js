const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const Model = require('./model')

function addRace(race){
    const myRace = new Model(race)
    return myRace.save()
}

function aggregateFare(driverId){
    return new Promise(async (resolve, reject) => {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDay())
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDay()+1)
        console.log(today)
        console.log(tomorrow)
        console.log('driverID ' + driverId)
        await Model.aggregate([
            { $match: { driver: ObjectId(driverId), isAccepted: true}
            },
            { $group: {_id: driverId, amount: {$sum: "$estimatedTaxiFare"} } }
        ], (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

function countIsAccepted(driverId){
    return new Promise((resolve, reject) => {
        if(!driverId){
            reject('[raceController] missing data')
        }
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDay())
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDay()+1)

        let driverCount = {
            _id: driverId,
            accepted: 0,
            rejected: 0
        }

        Model.countDocuments({
            driver: driverId,
            isAccepted: true
        })
        .catch(e => {
            reject(e)
        })
        .then((accepted)=>{
            driverCount.accepted = accepted
            Model.countDocuments({
                driver: driverId,
                isAccepted: false
            })
            .catch(e=>{
                reject(e)
            })
            .then((rejected)=>{
                driverCount.rejected = rejected
                resolve(driverCount)
            })
        })
    })
}

module.exports = {
    add: addRace,
    totalFare: aggregateFare,
    count: countIsAccepted
}