'use strict';
module.exports = (sequelize, DataTypes) => {
  const photo = sequelize.define('photo', {
    path: DataTypes.STRING
  }, {});
  photo.associate = function(models) {
    // associations can be defined here
    photo.belongsTo(models.location);
  };
  return photo;
};