'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lenses.init({
    company: DataTypes.STRING,
    zoom: DataTypes.STRING,
    focal_length: DataTypes.STRING,
    mount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lenses',
  });
  return Lenses;
};