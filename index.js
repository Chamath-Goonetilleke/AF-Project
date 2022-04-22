import db from "./startUp/db.js";
import express from "express";
import config from "./startUp/config.js";
const app = express();

config();
db();

const port = process.env.PORT || 4500;
const server = app.listen(port, () => {
  console.log(`Listning on Port : ${port} `);
});

export default server;
