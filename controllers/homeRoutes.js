const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Game, User } = require("../models");

// the withauth middleware checks whether the use is logged in before proceeding
router.get("/", withAuth, async (req, res) => {
  try {
    const dbGames = await Game.findAll();
    const games = dbGames.map((game) => game.get({ plain: true }));

    console.log("Before current user");

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("homepage", {
      games,
      ...user,
      // passing through the users and logged in status to the homepage.handlebars
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if the user is logged in then redirect to the homepage, if not, render the login.handlebars
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
