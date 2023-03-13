const router = require("express").Router();
const userRoutes = require("./userRoutes");
const requestRoutes = require("../requestRoutes");



router.use("/users", userRoutes);

router.use("/myrequests", requestRoutes);
router.use("/myrequests", requestRoutes);


module.exports = router;
