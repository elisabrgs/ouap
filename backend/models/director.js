'use strict';
module.exports = (sequelize, DataTypes) => {
  const director = sequelize.define('director', {
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING
  }, {});
  director.associate = function(models) {
    // associations can be defined here
    director.hasMany(models.movie);
  };
  return director;
};