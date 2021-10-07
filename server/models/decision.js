'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Decision extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Decision.belongsTo(models.User, {as:'user', foreignKey: 'user_id'})
      models.Decision.hasMany(models.Option, {as: 'options', foreignKey: 'decision_id'})
      models.Decision.hasMany(models.Factor, {as: 'factors', foreignKey: 'decision_id' })
    }
    
  };
  Decision.init({
    decision_title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Decision',
  });
  return Decision;
};