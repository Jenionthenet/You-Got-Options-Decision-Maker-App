'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      option_title: {
        type: Sequelize.STRING
      },
      option_image_url: {
        type: Sequelize.TEXT
      },
      total_points: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Options');
  }
};