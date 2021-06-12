const store = require('./store')

function addRace(race){
    if(
    !race.driver||
    !race.originLatitude||
    !race.originLongitude||
    !race.destinationLatitude||
    !race.destinationLongitude||
    !race.isAccepted||
    !race.isFinished||
    !race.estimatedTaxiFare||
    !race.originalTaxiFare||
    !race.acceptedAt
    ){
        return Promise.reject('[raceController] invalid data')
    }
    const raceObj = {
        ...race,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    return store.add(raceObj)
}

function totalFare(driverId){
    if(!driverId){
        return new Promise.reject('[raceController] missing data')
    }
    return store.totalFare(driverId)
}

function countIsAccepted(driverId){
    if(!driverId){
        return new Promise.reject('[raceController] missing data')
    }
    return store.count(driverId)
}

module.exports = {
    addRace,
    totalFare,
    countIsAccepted
}