const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const { config } = require('./config')
const url = `${config.MONGODB_URL}fakeshop`
mongoose.connect(url, () => {
    console.log('connected')
})

module.exports = mongoose.connection
