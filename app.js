const express = require('express');
const productRoute = require('./router/productRoute');
const userRoute = require('./router/userRoute');
const orderRoute = require('./router/orderRoute')
const bodyParser = require('body-parser')
const app = express()
require('./config/db')

const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/v1', productRoute)
app.use('/api/v1', userRoute)
app.use('/api/v1', orderRoute)

app.use((req, res, next) => {
    res.send('Route Not Found!')
})

// error handler 

module.exports = app;