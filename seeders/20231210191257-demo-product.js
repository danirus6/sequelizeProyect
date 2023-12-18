'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', [
      {
        productName: 'Steam',
        price: 200,
        categoryID: 1,
        createdAt: new Date(),
        upDatedAt: new Date()
    },
    {
        productName: 'Playstation',
        price: 300,
        categoryID: 2,
        createdAt: new Date(),
        upDatedAt: new Date()
    },
    {
        productName: 'Nintendo',
        price: 100,
        categoryID: 2,
        createdAt: new Date(),
        upDatedAt: new Date()
    },
    {
        productName: 'Microsoft',
        price: 350,
        categoryID: 2,
        createdAt: new Date(),
        upDatedAt: new Date()
    },
    {
        productName: 'Percha',
        price: 3,
        categoryID: 1,
        createdAt: new Date(),
        upDatedAt: new Date()
    }
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
