const { ProductsOrder } = require('../models/index.js');

const ProductOrderController = {
  create(req, res) {
    const { orderId, productId, quantity } = req.body;

    // Puedes personalizar la lógica según tus necesidades
    ProductsOrder.create({
      orderId,
      productId,
      quantity,
    })
      .then(productOrder => res.status(201).send({ message: 'Relación creada con éxito', productOrder }))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al crear relación');
      });
      
  },
  findAll(req, res) {
    // Puedes personalizar la lógica según tus necesidades
    ProductsOrder.findAll()
      .then(productOrders => res.status(200).json(productOrders))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al obtener relaciones');
      });
    },
};

module.exports = ProductOrderController;
