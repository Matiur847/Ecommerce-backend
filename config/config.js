require('dotenv').config()

const configData = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    jwtSec: process.env.JWT_SEC,
    jwtExp: process.env.JWT_EXP,
    smptMail: process.env.SMPT_MAIL,
    smptPassword: process.env.SMPT_PASSWORD,
    smptService: process.env.SMPT_SERVICE
}

module.exports = configData;