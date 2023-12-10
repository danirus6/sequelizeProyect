const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Ruta para la creación de productos
router.post('/create', ProductController.create);

module.exports = router;
