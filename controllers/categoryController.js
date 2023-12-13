const { Category } = require('../models/index.js');

const CategoryController = {


  //   CRUD Categorías
  //   El endpoint para ver todas las categorías junto a los productos que tienen
  // Crea un endpoint que devuelva una categoría por id
  // Filtro para buscar categoría por nombre


  create(req, res) {
    const { categoryName, description } = req.body;

    // Puedes personalizar la lógica según tus necesidades
    Category.create({
      categoryName,
      description,
    })
      .then(category => res.status(201).send({ message: 'Categoría creada con éxito', category }))
      .catch(error => {
        console.error(error);
        res.status(500).send('Error al crear categoría');
      });
  },
};

module.exports = CategoryController;
