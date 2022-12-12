'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tripods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tripods.init({
    company: DataTypes.STRING,
    model: DataTypes.STRING,
    carry_capacity: DataTypes.INTEGER,
    meant_for: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tripods',
  });
  return Tripods;
};