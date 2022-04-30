const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(require("./routes/staff"));
app.use(require("./routes/chat"));

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port number ${PORT}`);
});
