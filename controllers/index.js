const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const findabuddyRoutes = require("./findabuddyRoutes");
const gameRoutes = require("./gameRoutes");
const requestRoutes = require("./requestRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/find-a-buddy", findabuddyRoutes);
router.use("/game", gameRoutes);
router.use("/requests", requestRoutes);

module.exports = router;
