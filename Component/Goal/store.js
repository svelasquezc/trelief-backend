const GoalModel = require('./model')
const DriverModel = require('../Driver/model')

function addGoal(idDriver, goal){
    return new Promise(async (resolve, reject) => {
        const myGoal = new GoalModel(goal)
        const goalObj = await myGoal.save().catch(e => {
            reject(e)
        })
        const newDriver = await DriverModel.findOneAndUpdate(
            {_id: idDriver}, {goals: goalObj._id}, { new: true })
            .catch(err => {
                reject(e)
            })
        resolve(newDriver)
    })
}

module.exports = {
    add: addGoal
}