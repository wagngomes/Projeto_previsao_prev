const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(3000, () => {
    console.log('servidor rodando')
})

app.use(bodyParser.json)

app.get('/', (req, res) => {
    res.send('PROGRAMA RODANDO')
})