const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Request, Console, Game, User } = require("../models");

// DESCRIPTION: Route to get to find a buddy - only accessible when logged in
router.get("/", withAuth, async (req, res) => {
  try {
    console.log("hello - in first get findabuddyRoutes.js"); //used for debugging

    const dbRequests = await Request.findAll({
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

    res.render("findabuddy", {
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

// DESCRIPTION: Creating a new find a buddy request
router.post("/", withAuth, async (req, res) => {
  try {
    console.log("hello - in second get findabuddyRoutes.js");
    const newBuddyReq = await Request.findAll({
      where: {
        game_id: req.body.game,
        console_id: req.body.consoledb,
      },
      include: [
        {
          model: Game,
        },
        {
          model: User,
        },
      ],
    });

    console.log(newBuddyReq);

    res.status(200).json(newBuddyReq);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// the withauth middleware checks whether the use is logged in before proceeding
router.get("/:id", withAuth, async (req, res) => {
  const requestID = req.params.id;
  try {
    const dbRequests = await Request.findAll({
      where: {
        id: requestID,
      },
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

    res.render("contact", {
      requests,
      games,
      consoles,
      // passing through the users and logged in status to the homepage.handlebars
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DESCRIPTION: Creating a new find a contact request
router.get("/:id", withAuth, async (req, res) => {
  const requestID = req.params.id;
  try {
    const dbRequests = await Request.findAll({
      where: {
        id: requestID,
      },
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

    res.status(200).json(requests, games, consoles);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
