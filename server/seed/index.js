require("dotenv").config();
const { sequelize, User } = require("../models");

const users = require("./users");

sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    users.map((user) => {
      User.create(user);
    })
  );
});
