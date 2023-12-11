const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/getAllUsers', UserController.findAll);

// Ruta para el formulario de registro
router.post('/register', UserController.create);

// router.post('/login', UserController.login);
module.exports = router;
