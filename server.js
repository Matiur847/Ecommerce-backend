const express = require('express')
const app = require('./app')
const { port } = require('./config/config')
const chalk = require('chalk')


app.listen(port, () => {
    console.log(chalk.bgYellow(`server is running at PORT ${port}`))
})