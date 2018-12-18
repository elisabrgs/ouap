'use strict';
module.exports = (sequelize, DataTypes) => {
  const scene = sequelize.define('scene', {
    comment: DataTypes.TEXT
  }, {});
  scene.associate = function(models) {
    // associations can be defined here
    scene.belongsTo(models.user);
    scene.hasMany(models.like);
    scene.belongsTo(models.movie);
    scene.belongsTo(models.location);
  };
  return scene;
};