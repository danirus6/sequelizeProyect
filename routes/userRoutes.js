const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Ruta para el formulario de registro
router.post('/register', UserController.create);

module.exports = router;
