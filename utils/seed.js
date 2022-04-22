const connection = require("../config/connection");
// const { Course, Student, User } = require("../models");
const { User, Thought } = require("../models");
const { users, thoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected");

    // drop existing collections
    await Thought.deleteMany({});
    await User.deleteMany({});

    // Create empty array to hold the students
    // const users = [
    //     {
    //         username: "dblaine",
    //         email: "dblaine@gmail.com",
    //     },
    // ];

    // Loop 20 times -- add students to the students array
    // for (let i = 0; i < users.length; i++) {
    //     // Get some random assignment objects using a helper function that we imported from ./data
    //     // const email = getRandomAssignments(20);
    //     // const username = getRandomName();
    //     // const first = fullName.split(" ")[0];
    //     // const last = fullName.split(" ")[1];
    //     // const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    //     users.push({
    //         username,
    //         email,
    //     });
    // }

    // populate collections
    await Thought.collection.insertMany(thoughts);
    // Thought.find().populate({ path: reactions, reactions: getRandomArrItem(reactions) });
    await User.collection.insertMany(users);
    User.find().populate("thoughts", "_id");
    User.find().populate("friends", "_id");

    // Add courses to the collection and await the results
    // await Course.collection.insertOne({
    //     courseName: "UCLA",
    //     inPerson: false,
    //     students: [...students],
    // });

    // Log out the seed data to indicate what should appear in the database
    console.table(thoughts);
    console.table(users);
    console.info("Seeding successful!");
    process.exit(0);
});
