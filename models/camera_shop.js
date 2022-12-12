'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Camera_shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Employees, {foreignKey: "camera_shopId", as: "employees", onDelete: "cascade", hooks: true});
      this.hasMany(models.Suppliers, {foreignKey: "camera_shopId", as: "suppliers", onDelete: "cascade", hooks: true});
      this.hasMany(models.Cameras, {foreignKey: "camera_shopId", as: "cameras", onDelete: "cascade", hooks: true});
      this.hasMany(models.Lenses, {foreignKey: "camera_shopId", as: "lenses", onDelete: "cascade", hooks: true});
      this.hasMany(models.Tripods, {foreignKey: "camera_shopId", as: "tripods", onDelete: "cascade", hooks: true});
      this.hasMany(models.Filters, {foreignKey: "camera_shopId", as: "filters", onDelete: "cascade", hooks: true});
      this.hasMany(models.Microphones, {foreignKey: "camera_shopId", as: "microphones", onDelete: "cascade", hooks: true});
      this.hasMany(models.Purchase, {foreignKey: "camera_shopId", as: "purchase", onDelete: "cascade", hooks: true});
    }
  }
  Camera_shop.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Camera_shop',
  });
  return Camera_shop;
};