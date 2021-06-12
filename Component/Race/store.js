const Model = require('./model')

function addRace(race){
    const myRace = new Model(race)
    return myRace.save()
}

module.exports = {
    add: addRace
}