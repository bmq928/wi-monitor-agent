const config = require('config')
const path = require('path')

const {poll} = require('./monitorProcess')

const logs = path.join(__dirname, 'logs.txt')
const url = config.get('wiMonitorUrl') + '/monitor-process/insert-data'

module.exports = {
    logs,
    poll,
    url
}