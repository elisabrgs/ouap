'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    productionYear: DataTypes.INTEGER,
    releaseDate: DataTypes.DATEONLY,
    language: DataTypes.STRING,
    trailer: DataTypes.STRING,
    poster: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
    movie.hasMany(models.scene);
    movie.belongsTo(models.distributor);
    movie.belongsToMany(models.actor, {through: 'MovieActor'});
    movie.belongsToMany(models.category, {through: 'MovieCategory'});
    movie.belongsTo(models.director);
  };
  return movie;
};