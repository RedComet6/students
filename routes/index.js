const router = require("express").Router();
const apiRoutes = require("./api");

// direct to routes for api use
router.use("/api", apiRoutes);

router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
