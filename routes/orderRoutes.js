const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const ProductController = require('../controllers/productController');
const { authentication } = require('../middlewares/authentication')


router.post('/create', authentication, OrderController.create);

router.get('/getAll', OrderController.getAll);
module.exports = router;