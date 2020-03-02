const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define("images", {
  title: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  }
});

module.exports = Image;
