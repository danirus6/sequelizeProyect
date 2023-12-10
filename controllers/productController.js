const { Product } = require('../models/index.js');

const ProductController = {
  create(req, res) {
    const { productName, price, categoryId } = req.body;

    // Puedes personalizar la lógica según tus necesidades
    Product.create({
      productName,
      price,
      categoryId,
    })
      .then(product => res.status(201).send({ message: 'Producto creado con éxito', product }))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al crear producto');
      });
  },
};

module.exports = ProductController;
