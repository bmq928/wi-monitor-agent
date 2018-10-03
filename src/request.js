const config = require('config')
const axios = require('axios')
const winston = require('winston')

const domain = config.get('domain')
const serverName = config.get('serverName')


const request = (sensor, time) => {

    const logger = winston.createLogger({
        transports: [
            new winston.transports.File({ filename: sensor.logs })
        ]
    })


    setInterval(async () => {

        try {
            const sensorData = await sensor.poll()
            const bodyRequest = {
                ...sensorData,
                domain,
                serverName
            }
            const response = await axios.post(sensor.url, bodyRequest)
            // const response = await axios.post('http://localhost:3001/monitor-process/insert-data', {
            //     df: 'df'
            // })
            
            logger.info(`${new Date()}-${response.status}-${response.statusText}-${response.data.message}`)
        } catch ({ response }) {
            // console.log((e.response.data))
            logger.error(`${new Date()}-${response.status}-${response.statusText}-${response.data}`)
        }

    }, time)




}

module.exports = request
