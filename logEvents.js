const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}\t${uuid()}\t${message}`
    console.log(dateTime)

    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventlog.txt'), dateTime)
    } catch (err) {
        console.log(err)
    }
}

module.exports = logEvents
