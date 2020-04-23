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
      Name: {
        type: DataTypes.STRING,
      },
      DateOfBirth: {
        type: DataTypes.DATE,
      },
      Email: {
        type: DataTypes.STRING,
        unique: true,
      },
      Password: DataTypes.STRING,
      Active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      hooks: {
        beforeCreate: async (user) => {
          user.setDataValue("Password", await bcrypt.hash(user.Password, 8));
        },
      },
    }
  );

  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};
