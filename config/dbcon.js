const { MongoClient } = require("mongodb");
const Db =
  "mongodb+srv://admin:admin@itp.02s4w.mongodb.net/retryWrites=true&w=majority";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (database, callback) {
    client.connect(function (err, db) {
      _db = db.db(database);
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
