const express = require("express");

const researchRecordRoutes = express.Router();

const dbo_research = require("../config/dbcon");
dbo_research.connectToServer("Research", function (err) {
  if (err) console.log(err);
});

const ObjectId = require("mongodb").ObjectId;

// Return all accepted research topics by staff id
researchRecordRoutes.route("/staff/topics/:id").get(function (req, res) {
  let db_connect = dbo_research.getDb("Research");
  db_connect
    .collection("Topics")
    .find({ StaffID: req.params.id, Status: "Accepted" })
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
});

// Return all requested research topics by staff id
researchRecordRoutes
  .route("/staff/topics/requests/:id")
  .get(function (req, res) {
    let db_connect = dbo_research.getDb("Research");
    db_connect
      .collection("Topics")
      .find({ StaffID: req.params.id, Status: "Unknown" })
      .toArray(function (err, result) {
        if (err) {
          console.log(err);
        }
        res.json(result);
      });
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
    let db_connect = dbo_research.getDb("Research");
    db_connect.collection("Topics").findOne(myquery, function (err0, result0) {
      if (err0) {
        console.log(err0);
      }
      db_connect.createCollection(result0.ResearchID, function (err1, result1) {
        if (err1) {
          console.log(err1);
        }
      });
    });
    db_connect
      .collection("Topics")
      .updateOne(myquery, newvalues, function (err, result) {
        if (err) {
          console.log(err);
        }
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
    let db_connect = dbo_research.getDb("Research");
    db_connect
      .collection("Topics")
      .updateOne(myquery, newvalues, function (err, result) {
        if (err) {
          console.log(err);
        }
      });
    res.send(true);
  });

module.exports = researchRecordRoutes;
