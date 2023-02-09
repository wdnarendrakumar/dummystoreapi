const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId: {
        type: String, required: true
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
}, { timestamps: true })

module.exports = mongoose.model('carts', cartSchema)