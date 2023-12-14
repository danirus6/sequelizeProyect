const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Ruta para la creación de productos
router.post('/create', ProductController.create);
router.get('/getAll', ProductController.getAll);
router.get('/:id', ProductController.findById);
router.get('/getAllWithCategory', ProductController.getAllWithCategory)
router.get('/getByName/:productName', ProductController.findByName)
router.get('/findByPrice/:price', ProductController.findByPrice)
router.get('/products/ordered', ProductController.getAllOrdered);
module.exports = router;
