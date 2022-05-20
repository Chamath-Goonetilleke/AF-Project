const express = require("express");
const { MarkingRubrik } = require("../../models/IT20122096/MarkingRubrik");
const router = express.Router();

router.post('/', async(req, res) => {
  
  let Marking = req.body.name;
  if (!Marking) return res.status(400).send("No name")
  
  Marking= new MarkingRubrik({ name: req.body.name });
  await Marking.save();

  res.send(Marking);
});

router.get("/", async (req, res) => {
  const Markings = await MarkingRubrik.find();
  if (!Markings) return res.status(400).send("Cant find any");
  res.send(Markings)

});
router.get("/:id", async (req, res) => {
  const Marking = await MarkingRubrik.findById(req.params.id);
  if (!Marking) return res.status(400).send("Cant find any");
  res.send(Marking);
});

router.delete("/:id", async (req,res) => {
  
  const marking = await MarkingRubrik.findByIdAndDelete(req.params.id);
  if (!marking) return res.status(400).send("No Marking");
  res.send(marking);


})

module.exports = router;