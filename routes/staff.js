const express = require("express");
const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://admin:admin@research.p3u2u.mongodb.net/?retryWrites=true&w=majority";
let dbo_topics;
let dbo_chat;
MongoClient.connect(URI, function (err, client) {
  if (err) console.log(err);
  dbo_topics = client.db("Research");
  dbo_chat = client.db("Chat");
});

const researchRecordRoutes = express.Router();

const ObjectId = require("mongodb").ObjectId;

// Return all accepted research topics by staff id
researchRecordRoutes.route("/staff/topics/:id").get(function (req, res) {
  dbo_topics
    .collection("Topics")
    .find({ StaffID: req.params.id, Status: "Accepted" })
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
      }
    });
  res.json(result);
});

// Return all requested research topics by staff id
researchRecordRoutes
  .route("/staff/topics/requests/:id")
  .get(function (req, res) {
    dbo_topics
      .collection("Topics")
      .find({ StaffID: req.params.id, Status: "Unknown" })
      .toArray(function (err, result) {
        if (err) {
          console.log(err);
        }
      });
    res.json(result);
  });

// Accept a topic request and return it's status using requested topic's id
researchRecordRoutes
  .route("/staff/topics/requests/accept/:id")
  .get(function (req, res) {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        Status: "Accepted",
      },
    };
    dbo_topics.collection("Topics").findOne(myquery, function (err0, result0) {
      if (err0) throw err0;
      dbo_chat.createCollection(result0.ResearchID, function (err1, result1) {
        if (err1) throw err1;
      });
    });
    dbo_topics
      .collection("Topics")
      .updateOne(myquery, newvalues, function (err, result) {
        if (err) throw err;
      });
    res.send(true);
  });

// Decline a topic request and return it's status using declined topic's id
researchRecordRoutes
  .route("/staff/topics/requests/decline/:id")
  .get(function (req, res) {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        Status: "Rejected",
      },
    };
    dbo_topics
      .collection("Topics")
      .updateOne(myquery, newvalues, function (err, result) {
        if (err) throw err;
      });
    res.send(true);
  });

module.exports = researchRecordRoutes;
