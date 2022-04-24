const { connect, connection } = require("mongoose");

// connection data for mongoose
const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/socialDB";

// run mongoose connection
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
