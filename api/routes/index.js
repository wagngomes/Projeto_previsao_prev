const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')

module.exports = app => {

    app.use(bodyParser.json())
    app.use(usuarios)
    app.get('/',(req, res) => {
        res.send('servidor funcionando')
    })
}

