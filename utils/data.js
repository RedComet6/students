// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// // Gets a random full name
// const getRandomName = () => `${getRandomArrItem(users)}}`;

// // Function to generate random assignments that we can add to student object.
// const getRandomAssignments = (int) => {
//     const results = [];
//     for (let i = 0; i < int; i++) {
//         results.push({
//             assignmentName: getRandomArrItem(thoughts),
//             score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
//         });
//     }
//     return results;
// };

// const usersSeed = [
//     {
//         username: "achamberlain",
//         email: "achamberlain12@gmail.com",
//     },
//     {
//         username: "mgriffin",
//         email: "mgriffin23@gmail.com",
//     },
//     {
//         username: "mpalmer",
//         email: "mpalmer34@gmail.com",
//     },
//     {
//         username: "scernera",
//         email: "scernera45@gmail.com",
//     },
//     {
//         username: "jmilner",
//         email: "jmilner56@gmail.com",
//     },
// ];

const reactions = [
    {
        reactionBody: "Wowzers!",
        username: "dleary",
    },
    {
        reactionBody: "That is neat",
        username: "asandler",
    },
    {
        reactionBody: "Boringggggg",
        username: "dchappelle",
    },
    {
        reactionBody: "It is too late at night for this",
        username: "jsteenken",
    },
    {
        reactionBody: "You are so wrong",
        username: "jbosch",
    },
];

const thoughts = [
    { thoughtText: "The Thing is my favorite movie", username: "achamberlain", reactions: [getRandomArrItem(reactions)] },
    {
        thoughtText: "I often confuse Kevin Bacon with Dennis Leary",
        username: "mgriffin",
        reactions: [getRandomArrItem(reactions)],
    },
    {
        thoughtText: "I like mongoDB better than MySQL",
        username: "mpalmer",
        reactions: [getRandomArrItem(reactions)],
    },
    {
        thoughtText: "David Blaine does the best street magic",
        username: "scernera",
        reactions: [getRandomArrItem(reactions)],
    },
    {
        thoughtText: "Criss Angel wishes he were David Blaine",
        username: "jmilner",
        reactions: [getRandomArrItem(reactions)],
    },
];

const users = [
    {
        username: "achamberlain",
        email: "achamberlain12@gmail.com",
    },
    {
        username: "mgriffin",
        email: "mgriffin23@gmail.com",
    },
    {
        username: "mpalmer",
        email: "mpalmer34@gmail.com",
    },
    {
        username: "scernera",
        email: "scernera45@gmail.com",
    },
    {
        username: "jmilner",
        email: "jmilner56@gmail.com",
    },
];

// Export the functions for use in seed.js
// module.exports = { getRandomName, getRandomAssignments };
module.exports = { users, thoughts, reactions };
