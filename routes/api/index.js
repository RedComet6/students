const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// routes for users collection
router.use("/users", userRoutes);
// routes for thoughts collection
router.use("/thoughts", thoughtRoutes);

module.exports = router;
