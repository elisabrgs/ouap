'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.scene);
    user.hasMany(models.like);
  };
  return user;
};