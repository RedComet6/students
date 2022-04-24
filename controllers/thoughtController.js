const { ObjectId } = require("mongoose").Types;
const { Thought, User } = require("../models");

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then(async (thoughts) => {
                const userObj = {
                    thoughts,
                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .lean()
            .then(async (thought) => (!thought ? res.status(404).json({ message: "No thought with that ID" }) : res.json({ thought })))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // create a new thought
    createThought(req, res) {
        Thought.create({ thoughtText: req.body.thoughtText, username: req.body.username })
            .then((thought) => {
                return User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: { thoughts: thought._id } }, { new: true });
            })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
            .then((thought) => (!thought ? res.status(404).json({ message: "No thought with this id!" }) : res.json(thought)))
            .catch((err) => res.status(500).json(err));
    },
    // delete a thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then(() => res.json("Successfully deleted a thought!"))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Add an reaction to a thought
    addReaction(req, res) {
        console.log("You are adding an reaction");
        console.log(req.body);
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true })
            .then((thought) => (!thought ? res.status(404).json({ message: "No thought found with that ID" }) : res.json(thought)))
            .catch((err) => res.status(500).json(err));
    },
    // Remove reaction from a thought
    deleteReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { _id: req.params.reactionId } } }, { runValidators: true, new: true })
            .then((thought) => (!thought ? res.status(404).json({ message: "No thought or reaction found with that ID" }) : res.json(thought)))
            .catch((err) => res.status(500).json(err));
    },
};
