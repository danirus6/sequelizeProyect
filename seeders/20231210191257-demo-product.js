'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', [
      {
        productName: 'ProductA',
        price: 19.99,
        categoryId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Products', null, {});

    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
