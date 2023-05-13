const express = require('express')
const app = express()
const routes = require('./routes/index')

routes(app)

app.listen(3000, () => {

    console.log('servidor no ar')
})

module.exports = app

