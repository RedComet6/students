const router = require("express").Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require("../../controllers/userController");

// api/users
router.route("/").get(getUsers).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route("/:userId/friends").post(addFriend);

// /api/users/:userId/friends/:userId
router.route("/:userId/friends/:userId").delete(removeFriend);

module.exports = router;
