'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductsOrder.belongsTo(models.Product, { foreignKey: 'productId' });
      ProductsOrder.belongsTo(models.Order, { foreignKey: 'orderId' });

    }
  }
  ProductsOrder.init({
    quantity: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsOrder',
  });
  return ProductsOrder;
};