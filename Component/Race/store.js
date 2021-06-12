const Model = require('./model')

function addRace(race){
    const myRace = new Model(race)
    return myRace.save()
}

function aggregateFare(driverId){
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDay())
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDay()+1)
    return Model.aggregate([
        { $match: [
            { driver: driverId },
            { isAccepted: true },
            { acceptedAt: {$gte: today, $lte: tomorrow}} 
        ]},
        { $group: {_id: driverId, amount: {$sum: "$estimatedTaxiFare"} } }
    ])
}

function countIsAccepted(driverId){
    return new Promise(async (resolve, reject) => {
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

        await Model.countDocuments({
            driver: driverId,
            isAcepted: true,
            acceptedAt: {$gte: today, $lte: tomorrow}
        }, (err, count) => {
            if(err){
                reject('[raceController] ' + e)
            }else{
                driver.accepted = count
            }
        })

        await Model.countDocuments({
            driver: driverId,
            isAcepted: false,
            acceptedAt: {$gte: today, $lte: tomorrow}
        }, (err, count) => {
            if(err){
                reject('[raceController] ' + e)
            }else{
                driver.rejected = count
            }
        })

        resolve(driverCount)
    })
}

module.exports = {
    add: addRace,
    totalFare: aggregateFare,
    count: countIsAccepted
}