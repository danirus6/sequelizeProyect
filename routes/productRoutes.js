const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Ruta para la creación de productos
router.post('/create', ProductController.create);
router.get('/findAll', ProductController.findAll);
router.get('/getById/:id', ProductController.findById)
router.get('getAll', ProductController.getAll)
router.get('getByName', ProductController.findByName)
router.get('getByPrice', ProductController.findByPrice)
module.exports = router;
