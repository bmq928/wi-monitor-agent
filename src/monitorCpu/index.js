const path = require('path')
const config = require('config')

const {poll} = require('./monitorCpu')

const logs = path.join(__dirname, 'logs.txt')
const url = config.get('wiMonitorUrl') + '/monitor-cpu/insert-data'

module.exports = {
    logs,
    poll,
    url
}