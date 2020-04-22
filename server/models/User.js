const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Email: {
        type: DataTypes.STRING,
        unique: true,
      },
      Password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          user.setDataValue("password", await bcrypt.hash(user.password, 8));
        },
      },
    }
  );

  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};
