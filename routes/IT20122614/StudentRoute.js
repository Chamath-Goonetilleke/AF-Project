const router = require("express").Router();
const cloudinary = require("../../config/it20122614/cloudinary");
let Group = require("../../models/IT20122614/Group");
const GroupMembers = require("../../models/IT20122614/groupmembers");
let Topic = require("../../models/IT20122614/RegisterTopic");
const RequestSepervisor = require("../../models/IT20122614/RequestSepervisor");
const Supervisor = require("../../models/IT20122614/Supervisor");
const upload = require("../../config/it20122614/multer");

// SET STORAGE
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });
// var upload = multer({ storage: storage });

// router.post("/registertopic",upload.single('myImage'), (req, res)=>{
//   const topic
// })
router.post("/uploads", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const groupid = req.body.groupid;
    const topic = req.body.subject;
    const message = req.body.message;
    const file = result.secure_url;
    const status = false;
    const field = req.body.field;
    // const newTopic = new Topic({
    //   groupid,
    //   topic,
    //   message,
    //   file,
    //   field,
    //   status,
    // });
    // file: result.secure_url,
    let newTopic = new Topic({
      groupid: req.body.groupid,
      topic: req.body.subject,
      message: req.body.message,
      file: result.url,
      field: req.body.field,
      status: "pending",
    });
    await newTopic.save();
    res.json(newTopic);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.route("/register/members").post((req, res) => {
  // const groupid = req.body.groupid;
  const groupid = req.body.groupid;
  const userRole = "Student";
  const userId = req.body.userId;
  const name = req.body.name;

  const groupMember = new GroupMembers({
    groupid,
    userRole,
    userId,
    name,
  });

  groupMember
    .save()
    .then(() => {
      res.json("member added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/request/topic").post((req, res) => {
  console.log("called======================");
  const supervisorid = req.body.supervisorid;
  const supervisorname = req.body.supervisorname;
  const field = req.body.supervisorField;
  const topic = req.body.topic;
  const message = req.body.message;
  const groupid = "SE3030_GRP_82";
  const status = "pending";
  const userRole = req.body.userRole;

  const requestTopic = new RequestSepervisor({
    supervisorid,
    supervisorname,
    field,
    topic,
    message,
    groupid,
    status,
    userRole,
  });
  console.log(requestTopic);

  requestTopic
    .save()
    .then(() => {
      res.json("Topic Requested");
    })
    .catch((err) => {
      console.log(err);
    });
});

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
  // const groupe = "SE3030_GRP_" + Math.floor(Math.random() * 100);
  // const leadername = req.body.leadername;
  // const leaderitnumber = req.body.leaderitnumber;
  // const st2name = req.body.st2name;
  // const st2itnumber = req.body.st2itnumber;
  // const st3name = req.body.st3name;
  // const st3itnumber = req.body.st3itnumber;
  // const st4name = req.body.st4name;
  // const st4itnumber = req.body.st4itnumber;
  const groupid = req.body.groupid;
  const supercisorid = "";
  const cosupercisorid = "";
  const panelmember = "";
  console.log(groupid);

  const newGroup = new Group({
    groupid,
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

// router.route("/topic/add", upload.single("file")).post(async (req, res) => {
router.post("/topic/add", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
    const groupid = req.body.groupid;
    const topic = req.body.topic;
    const message = req.body.message;
    const file = result.secure_url;
    const status = false;
    const field = req.body.field;
    const newTopic = new Topic({
      groupid,
      topic,
      message,
      file,
      field,
      status,
    });
    await newTopic.save();
    res.json(newTopic);
  } catch (err) {
    console.log(err + " my error");
  }
});

module.exports = router;
