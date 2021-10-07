'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Factors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      factor_description: {
        type: Sequelize.STRING
      },
      points: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Categories', field: 'id'}
      },
      option_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Options', field: 'id'},
        onDelete: 'CASCADE'
      },
      decision_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Decisions', field: 'id'}
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', field: 'id'}
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Factors');
  }
};