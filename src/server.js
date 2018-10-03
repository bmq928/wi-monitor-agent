const express = require('express')
const app = express()

const init = () => new Promise((resolve, reject) => {
    resolve(app)
})

module.exports = { init }