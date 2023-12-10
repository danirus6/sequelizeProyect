const { Order } = require('../models/index.js');

const OrderController = {
  create(req, res) {
    const { orderDate, totalAmount, userId } = req.body;

    // Puedes personalizar la lógica según tus necesidades
    Order.create({
      orderDate,
      totalAmount,
      userId,
    })
      .then(order => res.status(201).send({ message: 'Orden creada con éxito', order }))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al crear orden');
      });
  },
};

module.exports = OrderController;
