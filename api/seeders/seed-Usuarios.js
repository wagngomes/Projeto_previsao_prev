module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Usuarios', [
        {
          nome: "wagner",
          email: "wagner.gomes@viveo.com",
          senha: "123456",
          perfil:"admin",
          status:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
   
    
      ], {})
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Usuarios', null, {})
    }
  }