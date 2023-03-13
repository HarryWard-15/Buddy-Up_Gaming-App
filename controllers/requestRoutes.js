const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Request, Console, Game, User } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    // Find all requests
    const dbRequests = await Request.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
        },
        {
          model: Game,
        },
        {
          model: Console,
        },
      ],
    });
    const requests = dbRequests.map((request) => request.get({ plain: true }));

    const dbGames = await Game.findAll();
    const games = dbGames.map((game) => game.get({ plain: true }));

    const dbConsole = await Console.findAll();
    const consoles = dbConsole.map((console) => console.get({ plain: true }));

    res.render("requests", {
      requests,
      games,
      consoles,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newReq = await Request.create({
      user_id: req.session.user_id,
      game_id: req.body.game,
      console_id: req.body.consoleDB,
      date: req.body.dateTime,
    });
    console.log(newReq);
    res.status(200).json(newReq);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// TODO: FUTURE: ADD DELETE ROUTE FOR REQUESTS

module.exports = router;
