const router = require("express").Router();
let Group = require("../../models/IT20122614/Group");
let Topic = require("../../models/IT20122614/RegisterTopic");
const Supervisor = require("../../models/IT20122614/Supervisor");

router.route("/getsupervisor").get((req, res) => {
  let field = req.query.field;

  console.log(field);
  Supervisor.find({ field: field })
    .then((supervisor) => {
      res.json(supervisor);
      console.log(supervisor);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/add").post((req, res) => {
  const groupe = "SE3030_GRP_" + Math.floor(Math.random() * 100);
  const leadername = req.body.leadername;
  const leaderitnumber = req.body.leaderitnumber;
  const st2name = req.body.st2name;
  const st2itnumber = req.body.st2itnumber;
  const st3name = req.body.st3name;
  const st3itnumber = req.body.st3itnumber;
  const st4name = req.body.st4name;
  const st4itnumber = req.body.st4itnumber;
  const supercisorid = "";
  const cosupercisorid = "";
  const panelmember = "";

  const newGroup = new Group({
    groupe,
    leadername,
    leaderitnumber,
    st2name,
    st2itnumber,
    st3name,
    st3itnumber,
    st4name,
    st4itnumber,
    supercisorid,
    cosupercisorid,
    panelmember,
  });

  newGroup
    .save()
    .then(() => {
      res.json("Group added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/topic/add").post((req, res) => {
  const groupe = req.body.groupID;
  const subject = req.body.subject;
  const message = req.body.message;
  const status = false;

  const newTopic = new Topic({
    groupe,
    subject,
    message,
    status,
  });

  newTopic
    .save()
    .then(() => {
      res.json("Topic added");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
