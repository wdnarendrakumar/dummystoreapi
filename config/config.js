require('dotenv').config('../.env')
exports.config = {
    MONGODB_URL: process.env.MONGODB_URL||'mongodb://127.0.0.1:27017/',
    PORT: process.env.PORT||3000
}