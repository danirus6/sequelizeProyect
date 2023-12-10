const { User } = require('../models/index.js');

const UserController = {
  create(req, res) {
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
