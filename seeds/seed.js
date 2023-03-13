const sequelize = require("../config/connection");
const { User, Game, Genre, Request, Console, Review } = require("../models");

const userData = require("./userData.json");
const gameData = require("./gameData.json");
const genreData = require("./genreData.json");
const requestData = require("./requestData.json");
const console_data = require("./consoleData.json");
const reviewData = require("./reviewData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Console.bulkCreate(console_data, {
    returning: true,
  });

  console.log("--------------Console DATA SEEDED--------------");

  await Game.bulkCreate(gameData, {
    returning: true,
  });

  console.log("--------------Game DATA SEEDED--------------");

  await Genre.bulkCreate(genreData, {
    returning: true,
  });

  console.log("--------------Genre DATA SEEDED--------------");

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log("--------------User DATA SEEDED--------------");

  await Request.bulkCreate(requestData, {
    returning: true,
  });

  console.log("--------------Request DATA SEEDED--------------");

  await Review.bulkCreate(reviewData, {
    returning: true,
  });

  console.log("--------------Review DATA SEEDED--------------");

  process.exit(0);
};

seedDatabase();
