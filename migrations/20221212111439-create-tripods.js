'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tripods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      camera_shopId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shopping_cartId: {
        type: Sequelize.INTEGER,
      },
      company: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      carry_capacity: {
        type: Sequelize.INTEGER
      },
      meant_for: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tripods');
  }
};