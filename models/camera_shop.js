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
      this.hasMany(models.Employees, {foreignKey: "cameraShopId", as: "employees"}); //, onDelete: "cascade", hooks: true
      this.hasMany(models.Suppliers, {foreignKey: "cameraShopId", as: "suppliers"});
      this.hasMany(models.Cameras, {foreignKey: "cameraShopId", as: "cameras"});
      this.hasMany(models.Lenses, {foreignKey: "cameraShopId", as: "lenses"});
      this.hasMany(models.Tripods, {foreignKey: "cameraShopId", as: "tripods"});
      this.hasMany(models.Filters, {foreignKey: "cameraShopId", as: "filters"});
      this.hasMany(models.Microphones, {foreignKey: "cameraShopId", as: "microphones"});
      this.hasMany(models.Purchase, {foreignKey: "cameraShopId", as: "purchase"});
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