const express = require("express");
const { Submision } = require("../../models/IT20122096/Submistions");
const router = express.Router();

router.post("/", async (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400).send("Name is not given");

  const submision = new Submision({ name: name });
  await submision.save();

  res.send(submision);
});

router.get("/", async (req, res) => {
  const submisions = await Submision.find();
  if (submisions.length === 0) return res.status(400).send("submisions not found");
  res.send(submisions);
})

module.exports = router;