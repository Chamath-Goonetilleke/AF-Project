const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: "http://localhost:1234" }));

app.use("/staff", require("./routes/staff"));
app.use("/chat", require("./routes/chat"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server has started on port number ${PORT}`);
});

module.exports = server;
