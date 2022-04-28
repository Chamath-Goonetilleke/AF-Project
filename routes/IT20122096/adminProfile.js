const express = require("express");
const router = express.Router();
const Group = require("../../models/IT20122614/Group");

router.get("/groups", async (req,res) => {
  const groups = await Group.find();
  if (!groups) return res.status(400).send("There are no groups");

  res.send(groups);
});

module.exports = router;
