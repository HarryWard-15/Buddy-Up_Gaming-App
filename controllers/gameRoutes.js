const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Game, Review, User } = require("../models");

// the withauth middleware checks whether the use is logged in before proceeding
router.get("/:id", withAuth, async (req, res) => {
  const gameID = req.params.id;

  try {
    const dbGames = await Game.findOne({
      where: {
        id: gameID,
      },
    });
    const games = dbGames.get({ plain: true });

    const dbReviews = await Review.findOne({
      where: {
        game_id: gameID,
      },
      include: { model: User, attributes: { exclude: ["password"] } },
    });
    const reviews = dbReviews.get({ plain: true });

    console.log("GAMES:");
    console.log(games);
    console.log("REVIEWS:");
    // console.log(reviews);

    res.render("game", {
      games,
      reviews,
      // passing through the users and logged in status to the homepage.handlebars
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
