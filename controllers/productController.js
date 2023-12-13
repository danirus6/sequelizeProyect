const { Product, Category } = require('../models/index.js');

const ProductController = {
  //   CRUD productos
  // Endpoint para crear un producto
  // Endpoint para actualizar un producto
  // Endpoint para eliminar un producto
  // El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
  // Endpoint que traiga un producto por su id
  // Filtro para buscar producto por nombre
  // Filtro para buscar producto por precio
  // Filtro que ordene los productos de mayor a menor precio
  // Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje
  // Solo podrás crear, actualizar y eliminar productos si estás autenticado.



  findAll(req, res) {
    // Puedes personalizar la lógica según tus necesidades
    Product.findAll()
      .then(Product => res.status(200).json(Product))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al obtener relaciones');
      });
  },
  findById(req, res) {
    // Puedes personalizar la lógica según tus necesidades
    Product.findByPk(req.params.id)
      .then(Product => res.status(200).json(Product))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al obtener relaciones');
      });
  },
  findByName(req, res) {
    // Puedes personalizar la lógica según tus necesidades
    Product.findByName(req.params.productName)
      .then(Product => res.status(200).json(Product))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al obtener relaciones');
      });
  },
  findByPrice(req, res) {
    // Puedes personalizar la lógica según tus necesidades
    Product.findByPrice(req.params.price)
      .then(Product => res.status(200).json(Product))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al obtener relaciones');
      });
  },

  async getAll(req, res) {
    try {
      const Product = await Product.findAll({
        include: [{ model: Category, attributes: ["categoryName"], through: { attributes: [] } }],
      });
      res.send(orders);
    } catch (error) {
      console.error(error);
    }
  },


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
