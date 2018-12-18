'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    streetNumber: DataTypes.INTEGER,
    street: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    coordLatDD: DataTypes.FLOAT,
    coordLonDD: DataTypes.FLOAT
  }, {});
  location.associate = function(models) {
    // associations can be defined here
    location.hasMany(models.scene);
    location.hasMany(models.photo);
  };
  return location;
};