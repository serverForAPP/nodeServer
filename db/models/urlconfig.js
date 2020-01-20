'use strict';
module.exports = (sequelize, DataTypes) => {
  const urlconfig = sequelize.define('urlconfig', {
    orderId: DataTypes.STRING,
    url: DataTypes.STRING,
    type: DataTypes.STRING,
    developerMobile: DataTypes.STRING,
    developerName: DataTypes.STRING,
    switch: DataTypes.INTEGER
  }, {});
  urlconfig.associate = function(models) {
    // associations can be defined here
  };
  return urlconfig;
};