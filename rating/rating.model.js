const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'products',
        unique: true
    },
    rating: [
        {
            type: Number,
            min: 1,
            max: 5,
            required: true
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('ratings', ratingSchema)