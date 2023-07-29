const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const fornecedores = require('./fornecedoresRoute')
const auth = require('./authRoute')

module.exports = app => {

    app.use(
        bodyParser.json(),
        auth,
        usuarios,
        fornecedores
    )
}

