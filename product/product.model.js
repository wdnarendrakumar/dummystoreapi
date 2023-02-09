const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "categorys"
    },
    rating: {
        type: mongoose.Types.ObjectId,
        ref: "ratings"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('products', productSchema)