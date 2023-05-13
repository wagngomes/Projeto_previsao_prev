const database = require('../models')

class UsuariosController{

    static async listaTodosOsUsuarios(req, res) {
        try{
            const todosOsUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosOsUsuarios)  
            
        }catch(error){
            return res.status(500).json(error.message)

        }
  

    }

    








}

module.exports = UsuariosController