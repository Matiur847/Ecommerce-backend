const express = require('express')
const app = require('./app')
const { port } = require('./config/config')
const chalk = require('chalk')
const cloudinary = require('cloudinary')
const { cloudName, apiKey, apiSecret } = require('./config/config')


cloudinary.config({ 
    cloud_name: cloudName,
    api_key: apiKey, 
    api_secret: apiSecret
  });

app.listen(port, () => {
    console.log(chalk.bgYellow(`server is running at PORT ${port}`))
})