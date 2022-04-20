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

// const thoughts = ["The Thing is the best movie", "Meshuggah is the best band", "Gyros are the best food", "Lou Malnati's is the best deep dish"];

// Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

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

// Export the functions for use in seed.js
// module.exports = { getRandomName, getRandomAssignments };
module.exports = { users };
