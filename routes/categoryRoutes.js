const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');

// Ruta para la creación de categorías
router.post('/create', CategoryController.create);

module.exports = router;
