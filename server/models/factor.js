'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
const decision = require('./decision')
const category = require('./category')
const option = require('./option')
module.exports = (sequelize, DataTypes) => {
  class Factor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Factor.belongsTo(models.Category, {as: 'category', foreignKey: 'category_id', onDelete: 'CASCADE'},
       models.Option, {as:'option', foreignKey: 'option_id', onDelete: 'CASCADE'},  models.Decision, {as: 'decision', foreignKey: 'decision_id'}, models.User, {as:'user', foreignKey: 'user_id'},)
    }
  };
  Factor.init({
    factor_description: DataTypes.STRING,
    points: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    option_id: DataTypes.INTEGER,
    decision_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Factor',
  });
  return Factor;
};