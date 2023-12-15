const { Product, Category } = require('../models/index.js');
const { Op } = require('sequelize');
const ProductController = {
  
  // Solo podrás crear, actualizar y eliminar productos si estás autenticado.



  getAll(req, res) {
  // Puedes personalizar la lógica según tus necesidades
  Product.findAll()
    .then(products => res.status(200).json(products))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: error.message }); 
    });
},

  findById(req, res) {
    // Puedes personalizar la lógica según tus necesidades
    Product.findByPk(req.params.id)
      .then(product => res.status(200).json(product))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al obtener relaciones');
      });
  },

  findByName(req, res) {
  const productName = req.params.productName;
  Product.findAll({
    where: {
      productName: {
        [Op.like]: `%${productName}%` // Búsqueda por nombre parcial
      }
    }
  })
    .then(products => res.status(200).json(products))
    .catch(error => {
      console.error(error);
      res.status(500).send('Error al obtener productos por nombre');
    });
},

  findByPrice(req, res) {
  const { price } = req.params;

  Product.findAll({
    where: {
      price: parseFloat(price), // Asegúrate de manejar adecuadamente el tipo de dato de tu precio en la base de datos
    },
  })
    .then(products => res.status(200).json(products))
    .catch(error => {
      console.error(error);
      res.status(500).send('Error al obtener productos por precio');
    });
},
 async getAllWithCategory(req, res) {
    try {
      const productsWithCategories = await Product.findAll({
        include: [{
          model: Category,
          attributes: ["categoryName"],
        }],
      });

      res.status(200).json(productsWithCategories);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener productos con categorías');
    }
  },

async getAllOrdered(req, res) {
  try {
    const products = await Product.findAll({
      order: [['price', 'DESC']],
    });
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
},


  create(req, res) {
    const { productName, price, categoryId } = req.body;

     if (!productName || !price || !categoryId) {
    return res.status(400).send('Faltan datos obligatorios para crear el producto');
  }

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
