const express = require("express");
const router = express.Router();
const Group = require("../../models/IT20122614/Group");
const GroupMembers = require("../../models/IT20122614/GroupMembers");

router.get("/groups", async (req, res) => {
  const groups = await Group.find();
  if (!groups) return res.status(400).send("There are no groups");

  res.send(groups);
});

router.put("/groups/addPannelMember/:id", async (req, res) => {
  const group = await Group.findByIdAndUpdate(
    req.params.id,
    {
      panelmember: req.body.panelmember,
    },
    { new: true }
  );
  if (!group) return res.status(400).send("no group found");
  res.send(group);
});

router.get("/groups/groupMembers", async (req, res) => {
  const groups = await GroupMembers.find();
  if (!groups) return res.status(400).send("There are no group members");

  res.send(groups);
});
router.get("/groups/getGroupMemberById/:id", async (req, res) => {
  const member = await GroupMembers.findById(req.params.id);
  if (!member) return res.status(400).send("There is no group member");

  res.send(member);
});

router.put("/groups/UpdateGroupMembers/:id", async (req, res) => {
  const member = await GroupMembers.findByIdAndUpdate(
    req.params.id,
    {
      groupid: req.body.groupid,
      userRole: req.body.userRole,
      userId: req.body.userId,
      name: req.body.name,
    },
    { new: true }
  );
  if (!member) return res.status(400).send("Can't find member for given Id");

  res.send(member);
});
router.delete("/groups/DeleteGroupMember/:id", async (req, res) => {
  const member = await GroupMembers.findByIdAndDelete(req.params.id);
  if (!member) return res.status(400).send("Can't find member for given Id");
  res.send(member);
});

module.exports = router;
