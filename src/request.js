const config = require('config')
const axios = require('axios')

const domain = config.get('domain')
const serverName = config.get('serverName')


const request =async (sensor, time) => {
    // setInterval(async () => {

    //     try {
    //         const sensorData = await sensor.poll()
    //         const bodyRequest = {
    //             ...sensorData,
    //             domain,
    //             serverName
    //         }
    //         const { response } = await axios.post(sensor.url, bodyRequest)
    //         console.log(response.status)
    //     } catch(e) {
    //         console.log('err')
    //         console.log(e)
    //     }


    // }, time)



    try {
        const sensorData = await sensor.poll()
        const bodyRequest = {
            ...sensorData,
            domain,
            serverName
        }
        const { response } = await axios.post(sensor.url, bodyRequest)
        console.log(response.status)
    } catch (e) {
        console.log('err')
        console.log(e.response)
    }
}

module.exports = request