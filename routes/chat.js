const express = require("express");
const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://admin:admin@research.p3u2u.mongodb.net/?retryWrites=true&w=majority";
let dbo_chat;
MongoClient.connect(URI, function (err, client) {
  if (err) console.log(err);
  dbo_chat = client.db("Chat");
});

const researchRecordRoutes = express.Router();

researchRecordRoutes.route("/chat/:id").post(function (req, res) {
  let obj = {
    SendBy: req.body.UserID,
    Message: req.body.Message,
  };
  dbo_chat.collection(req.params.id).insertOne(obj, function (err, result) {
    if (err) throw err;
  });
  res.send(true);
});

researchRecordRoutes.route("/chat/:id").get(function (req, res) {
  dbo_chat
    .collection(req.params.id)
    .find()
    .sort({ _id: 1 })
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
      }
    });
  res.json(result);
});

module.exports = researchRecordRoutes;
