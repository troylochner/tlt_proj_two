module.exports = function(sequelize, DataTypes) {
  const order = sequelize.define("order", {
    custName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    } /*,
    orderTotal: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    }*/,
    orderStatus: {
      type: DataTypes.STRING,
      defaultValue: "Draft"
    }
  });

  order.associate = function(models) {
    order.belongsToMany(models.menuItem, {
      through: models.orderMenuItem
    });
    order.hasMany(models.orderMenuItem);
  };

  return order;
};
