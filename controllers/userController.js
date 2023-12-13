const { User } = require('../models/index.js');

const UserController = {
  // Endpoint para registrar un usuario utilizando bcrypt
  // Endpoint para login(utilizando bcrypt + JWT)
  // Endpoint que nos traiga la información del usuario conectado junto a los pedidos que tiene y los productos que contiene cada pedido
  // Endpoint para el logout
  // Implementa validación a la hora de crear un usuario para que se rellene todos los campos y si no se hace que devuelva un mensaje


  findAll(req, res) {
    // Puedes personalizar la lógica según tus necesidades
    User.findAll()
      .then(User => res.status(200).json(User))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al obtener relaciones');
      });
  },
  create(req, res) {
    //FALTA EL ENCRIPTADO
    req.body.role = "user";

    User.create(req.body)
      .then(user => res.status(201).send({ message: 'Usuario creado con éxito', user }))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al crear usuario');
      });
  },

  //ADD MORE METHODS HERE

};

module.exports = UserController;
