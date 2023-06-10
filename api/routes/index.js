const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const auth = require('./authRoute')

module.exports = app => {

    app.use(
        bodyParser.json(),
        auth,
        usuarios
    )
}

