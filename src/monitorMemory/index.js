const config = require('config')
const path = require('path')

const {poll} = require('./monitorMemory')

const logs = path.join(__dirname, 'logs.txt')
const url = config.get('wiMonitorUrl') + '/monitor-memory/insert-data'

module.exports = {
    logs,
    poll,
    url
}