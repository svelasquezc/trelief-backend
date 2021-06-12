const DriverController = require('../Driver/controller')
const store = require('./store')

function generateGoal(){
    return new Promise(async (resolve, reject) => {
        const allDrivers = await DriverController.listDriver().catch(e => {
            reject(e)
        })

        const goalTemplate = {
            kind: 'copDay',
            unit: 'COP'
        }

        allDrivers.forEach(async (iDriver)=> {
            console.log(iDriver)
            let idDriver = iDriver._id
            const goal = {
                ...goalTemplate,
                value: Math.random()*100001 + 100000,
                createdAt: Date(),
                driver: idDriver
            }
            await store.add(idDriver, goal).catch(e => {
                reject(e)
            })
        })
        resolve('Generated')
    })
}

module.exports = {generateGoal}