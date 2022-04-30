const express = require("express");
const { MarkingRubrik } = require("../../models/IT20122096/MarkingRubrik");
const router = express.Router();

router.post('/', (req, res) => {
  
  let Marking = req.body.name;
  if (!Marking) return res.status(400).send("No name")
  
  Marking= new MarkingRubrik({ name: req.body.name });
  Marking.save();

  res.send(Marking);
});

module.exports = router;