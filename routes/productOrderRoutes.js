const express = require('express');
const router = express.Router();
const ProductOrderController = require('../controllers/productOrderController');

// Ruta para la creación de la relación M:N entre Product y Order
router.post('/create', ProductOrderController.create);

module.exports = router;
