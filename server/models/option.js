'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
const decision = require('./decision')
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Option.belongsTo(models.User, {as:'user', foreignKey: 'user_id'}, models.Decision, {as: 'decision', foreignKey: 'decision_id', onDelete: 'CASCADE'})
    
      models.Option.hasMany(models.Factor, {as: 'factors', foreignKey: 'option_id'})
    }

  };
  Option.init({
    option_title: DataTypes.STRING,
    option_image_url: DataTypes.TEXT,
    total_points: DataTypes.INTEGER,
    decision_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Option',
  });
  return Option;
};