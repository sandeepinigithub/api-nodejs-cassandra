const cassandra = require("cassandra-driver");
const authProvider = new cassandra.auth.PlainTextAuthProvider(
  "Username",
  "Password"
);
const userQuery = require("../models/user.model");
const dbConfig = require("../config/db.config");

let client = new cassandra.Client({
  contactPoints: ['localhost'],
  keyspace: 'np_users_db',
  localDataCenter: 'datacenter1'
});

module.exports.getAllUser = async (req, res) => {
  let result;
  client.execute(userQuery.getAllUser(), function (error, res) {
    if (error != undefined) {
      console.log("Error:", error);
    } else {
      result = res.rows;
      console.table(res.rows);
    }
  });
  res.send("result");
};
