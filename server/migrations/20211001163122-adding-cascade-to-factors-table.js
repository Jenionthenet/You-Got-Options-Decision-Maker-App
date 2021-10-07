'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.changeColumn('Factors', 'option_id', {
        type: Sequelize.INTEGER,
        references: {model: 'Options', field: 'id'},
        onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.changeColumn('Factors', 'option_id', {
      type: Sequelize.INTEGER,
      references: {model: 'Options', field: 'id'}
      
  })
  }
};
