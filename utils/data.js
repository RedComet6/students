// seed data
const thoughts = [
    {
        thoughtText: "The Thing is my favorite movie",
        username: "achamberlain",
    },
    {
        thoughtText: "I often confuse Kevin Bacon with Dennis Leary",
        username: "mgriffin",
    },
    {
        thoughtText: "I like mongoDB better than MySQL",
        username: "mpalmer",
    },
    {
        thoughtText: "David Blaine does the best street magic",
        username: "scernera",
    },
    {
        thoughtText: "Criss Angel wishes he were David Blaine",
        username: "jmilner",
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

// Export the variables for use in seed.js
module.exports = { users, thoughts };
