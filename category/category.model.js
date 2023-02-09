const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        unique: true,
        trim: true,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('categorys', categorySchema)