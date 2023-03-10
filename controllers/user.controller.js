const cassandra = require("cassandra-driver");
const authProvider = new cassandra.auth.PlainTextAuthProvider(
    "Username",
    "Password"
);
const userQuery = require("../models/user.model");
const dbConfig = require("../config/db.config");

let client = new cassandra.Client({
    contactPoints: ["localhost"],
    keyspace: "meity_chat",
    localDataCenter: "datacenter1",
});

client.on('log', function (level, className, message, furtherInfo) {
    console.log('log event: %s -- %s', level, message);
});

client.connect().then(() => console.log('Cassandra DB Connected!'));

module.exports.createUser = async (req, res) => {
    let qResult;
    await client.execute(userQuery.createUser(req.body), async function (error, result) {
        if (error != undefined) {
            console.log("Error:", error);
        } else {
            qResult = await result.rows;
            res.send(qResult);
            console.table(result.rows);
        }
    });
};

module.exports.getAllUser = async (req, res) => {
    let qResult;
    await client.execute(userQuery.getAllUser(), async function (error, result) {
        if (error != undefined) {
            console.log("Error:", error);
        } else {
            qResult = await result.rows;
            res.send(qResult);
            console.table(result.rows);
        }
    });
};

module.exports.updateUser = async (req, res) => {
    let qResult;
    await client.execute(userQuery.updateUser(req.body), async function (error, result) {
        if (error != undefined) {
            console.log("Error:", error);
        } else {
            qResult = await result.rows;
            res.send(qResult);
            console.table(result.rows);
        }
    });
};

module.exports.deleteUser = async (req, res) => {
    let qResult;
    await client.execute(userQuery.deleteUser(req.body), async function (error, result) {
        if (error != undefined) {
            console.log("Error:", error);
        } else {
            qResult = await result.rows;
            res.send(qResult);
            console.table(result.rows);
        }
    });
};
