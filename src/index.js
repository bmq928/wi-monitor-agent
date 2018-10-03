const http = require('http')
const config = require('config')

const server = require('./server')
const request = require('./request')

const monitorCpu = require('./monitorCpu')
const monitorMemory = require('./monitorMemory')
const monitorProcess = require('./monitorProcess')


process.on('unhandledRejection', err => console.error(err))
process.on('uncaughtException', err => console.error(err))

main()

async function main() {
    const app = await server.init()
    const times = config.get('time')

    if('monitorCpu' in times) request(monitorCpu, times.monitorCpu)
    if('monitorMemory' in times) request(monitorMemory, times.monitorMemory)
    if('monitorProcess' in times) request(monitorProcess, times.monitorProcess)
    
    
    startServer(app)
}

async function startServer(app) {
    const PORT = config.get('port')
    http.createServer(app).listen(PORT, () => console.log(`server is starting in port: ${PORT}`))
}