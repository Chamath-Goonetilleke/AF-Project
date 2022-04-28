const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("../routes/IT20122096/user");
const login = require("../routes/IT20122096/login");
const criteria = require("../routes/IT20122096/criteria");
const markingRubrik = require("../routes/IT20122096/markingRubrik");
const adminProfile = require("../routes/IT20122096/adminProfile");

module.exports = function (app) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api/user", user);
  app.use("/api/login", login);
  app.use("/api/criteria", criteria);
  app.use("/api/marking", markingRubrik);
  app.use("/api/admin", adminProfile);
};
