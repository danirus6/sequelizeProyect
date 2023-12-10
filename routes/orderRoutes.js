const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

// Ruta para la creación de órdenes
router.post('/create', OrderController.create);

module.exports = router;
