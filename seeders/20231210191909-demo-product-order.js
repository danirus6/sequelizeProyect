'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('ProductsOrders', [
      {
        orderId: 1, // Ajusta según las órdenes existentes
        productId: 1, // Ajusta según los productos existentes
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ProductsOrders', null, {});
  }
};
