const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const {authentication} = require('../middlewares/authentication')

router.get('/getAllUsers', authentication, UserController.findAll);

// Ruta para el formulario de registro
router.post('/register', UserController.create);
router.post('/login',UserController.login)
router.delete('/delete/:id', authentication, UserController.deleteUser);

// router.post('/login', UserController.login);
module.exports = router;
