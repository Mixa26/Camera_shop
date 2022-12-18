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
      this.hasMany(models.Cameras, {foreignKey: "cameraId", as: "cameras"}); //, onDelete: "cascade", hooks: true
      this.hasMany(models.Lenses, {foreignKey: "lensId", as: "lenses"});
      this.hasMany(models.Tripods, {foreignKey: "tripodId", as: "tripods"});
      this.hasMany(models.Filters, {foreignKey: "filterId", as: "filters"});
      this.hasMany(models.Microphones, {foreignKey: "microphoneId", as: "microphones"});
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