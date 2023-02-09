const express = require('express')

const { config } = require('./config/config')

require('./config/db')

const productRoute = require('./product/product.route')

const cartRoute = require('./cart/cart.route')

const category = require('./category/category.route')

const rating = require('./rating/rating.route')

const app = express()

const { errorHandlor, errorConverter } = require('./middleware/error')

app.use(express.json())

app.use('/product', productRoute)

app.use('/cart', cartRoute)

app.use('/category', category)

app.use('/rating', rating)

app.use('*', (req, res) => {
    res.json({ error: 'url not exist' })
})

app.use(errorConverter)

app.use(errorHandlor)

app.listen(config.PORT, () => {
    console.log(`server listening on ${config.PORT}`)
})