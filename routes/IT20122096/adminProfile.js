const express = require("express");
const router = express.Router();
const Group = require("../../models/IT20122614/Group");
const GroupMembers = require("../../models/IT20122614/GroupMembers");

router.get("/groups", async (req,res) => {
  const groups = await Group.find();
  if (!groups) return res.status(400).send("There are no groups");

  res.send(groups);
});
router.get("/groups/groupMembers", async (req, res) => {
  const groups = await GroupMembers.find();
  if (!groups) return res.status(400).send("There are no group members");

  res.send(groups);
});

module.exports = router;
