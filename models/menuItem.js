module.exports = function(sequelize, DataTypes) {
  const menuItem = sequelize.define("menuItem", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });

  menuItem.associate = models => {
    menuItem.belongsToMany(models.order, {
      through: "orderMenuItem",
      as: "orders",
      foreignKey: "menuItemId",
      unique: false
    });
  };

  /*menuItem.associate = function(models) {
    menuItem.belongsToMany(models.order, {
      through: models.orderMenuItem
    });
  };*/

  return menuItem;
};
