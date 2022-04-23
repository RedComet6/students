const router = require("express").Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require("../../controllers/thoughtController");

// api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// // /api/users/:thoughtId/reactions
// router.route("/:thoughtId/friends").post(addFriend).delete(removeFriend);

module.exports = router;
