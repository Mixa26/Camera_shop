'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cameras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cameras.init({
    company: DataTypes.STRING,
    model: DataTypes.STRING,
    sensor: DataTypes.STRING,
    megapixels: DataTypes.INTEGER,
    video_size: DataTypes.STRING,
    video_fps: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cameras',
  });
  return Cameras;
};