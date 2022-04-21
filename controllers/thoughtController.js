const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

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
    // create a new user
    createThought(req, res) {
        Thought.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
};
