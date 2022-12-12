'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Employees, {foreignKey: "cameraId", as: "cameras", onDelete: "cascade", hooks: true});
      this.hasMany(models.Employees, {foreignKey: "lensId", as: "lenses", onDelete: "cascade", hooks: true});
      this.hasMany(models.Employees, {foreignKey: "tripodId", as: "tripods", onDelete: "cascade", hooks: true});
      this.hasMany(models.Employees, {foreignKey: "filterId", as: "filters", onDelete: "cascade", hooks: true});
      this.hasMany(models.Employees, {foreignKey: "microphoneId", as: "microphones", onDelete: "cascade", hooks: true});
      this.belongsTo(models.Purchase, {foreign_key: "purchaseId", as: "purchases"});
    }
  }
  shopping_cart.init({
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'shopping_cart',
  });
  return shopping_cart;
};