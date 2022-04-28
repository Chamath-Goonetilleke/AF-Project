const express = require("express");
const { MarkingRubrik } = require("../../models/IT20122096/MarkingRubrik");
const router = express.Router();

router.post('/', (req, res) => {
  
  const Marking = new MarkingRubrik({ name: req.body.name });
  Marking.save();

  res.send("marking saved");
});

module.exports = router;