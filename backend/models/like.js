'use strict';
module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define('like', {
    yes: DataTypes.BOOLEAN
  }, {});
  like.associate = function(models) {
    // associations can be defined here
    like.belongsTo(models.user);
    like.belongsTo(models.scene);
  };
  return like;
};