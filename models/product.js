'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        onDelete: 'CASCADE',
      });
      Product.belongsToMany(models.Order, {
        through: 'ProductsOrder'});
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    primaryKey: 'id', 
  });
  return Product;
};