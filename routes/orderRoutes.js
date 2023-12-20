const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const ProductController = require('../controllers/productController');

// Ruta para la creación de órdenes
router.post('/create', OrderController.create);

router.get('/getAll', OrderController.getAll);
module.exports = router;
