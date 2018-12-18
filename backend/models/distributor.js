'use strict';
module.exports = (sequelize, DataTypes) => {
  const distributor = sequelize.define('distributor', {
    name: DataTypes.STRING
  }, {});
  distributor.associate = function(models) {
    // associations can be defined here
    distributor.hasMany(models.movie);
  };
  return distributor;
};