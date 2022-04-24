const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, thoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected");

    // drop existing collections
    await Thought.deleteMany({});
    await User.deleteMany({});

    // // populate collections
    await Thought.collection.insertMany(thoughts);
    await User.collection.insertMany(users);

    // log seeded data in tables for user clarity
    console.table(thoughts);
    console.table(users);
    console.info("Seeding successful!");
    process.exit(0);
});
