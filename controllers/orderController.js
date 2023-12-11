const { Order, Product } = require('../models/index.js');

const OrderController = {
  
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
                include: [{ model: Product, attributes: ["productName"], through: { attributes: [] } }],

      //   include: [{ model: Product, attributes: ["productName"] }],
      //   exclude: [{ model: ProductsOrder, attributes: ["ProductsOrder"] }]
       });
      res.send(orders);
    } catch (error) {
      console.error(error);
    }
  },

  
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
