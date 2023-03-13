const User = require("./user");
const Game = require("./game");
const Genre = require("./genre");
const Request = require("./request");
const Console = require("./console");
const Review = require("./review");

User.belongsTo(Game, {
  foreignKey: "game_id",
});

Game.hasMany(User, {
  foreignKey: "game_id",
});

User.hasOne(Console, {
  foreignKey: "console_id",
});

Console.hasMany(User, {
  foreignKey: "console_id",
});

User.hasMany(Request, {
  foreignKey: "user_id",
});

Request.belongsTo(User, {
  foreignKey: "user_id",
});

Game.belongsToMany(Genre, {
  through: "GenreGame",
  // as: "game",
  foreignKey: "game_id",
});

Genre.belongsToMany(Game, {
  through: "GenreGame",
  // as: "genre",
  foreignKey: "genre_id",
});

Game.belongsToMany(Console, {
  through: "ConsoleGame",
  // as: "console",
  foreignKey: "game_id",
});

Console.belongsToMany(Game, {
  through: "ConsoleGame",
  // as: "gameConsole",
  foreignKey: "console_id",
});

Game.hasMany(Review, {
  foreignKey: "game_id",
});

Review.belongsTo(Game, {
  foreignKey: "game_id",
});

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Game.hasMany(Request, {
  foreignKey: "game_id",
});

Request.belongsTo(Game, {
  foreignKey: "game_id",
});

Console.hasMany(Request, {
  foreignKey: "console_id",
});

Request.belongsTo(Console, {
  foreignKey: "console_id",
});

module.exports = { User, Game, Request, Console, Genre, Review };
