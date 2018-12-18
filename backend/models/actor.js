'use strict';
module.exports = (sequelize, DataTypes) => {
  const actor = sequelize.define('actor', {
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    stageName: DataTypes.STRING
  }, {});
  actor.associate = function(models) {
    // associations can be defined here
    actor.belongsToMany(models.movie, {through: 'MovieActor'});
  };
  return actor;
};