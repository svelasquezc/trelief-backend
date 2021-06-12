const store = require('./store')

function addGoal(idDriver, kind, unit, value){
    if(!idDriver || !kind || !unit || !value || kind !== 'copDay' || unit!=='COP' ){
        return Promise.reject('[goalController] invalid data')
    }

    const goal = {
        kind,
        unit,
        value,
        createdAt: new Date,
        driver: idDriver

    }

    return store.add(idDriver, goal)
}

module.exports = {
    addGoal
}
