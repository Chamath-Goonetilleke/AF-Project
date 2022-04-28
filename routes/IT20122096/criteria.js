const express = require("express");
const { Criterias } = require("../../models/IT20122096/Criterias");
const router = express.Router();

router.post("/", (req, res) => {
  const criterias = new Criterias({
    name: req.body.name,
    value: req.body.value,
    markingRubrikId: req.body.markingRubrikId,
  });
  criterias.save();

  res.send("create new criteria");
});

router.get("/:id", async (req, res) => {
  const criterias = await Criterias.find({ markingRubrikId: req.params.id });

  if (!criterias)
    return res.status(404).send("Criterias for given id is not found.");

  res.send(criterias);
});

// router.put("/:id", async(req, res) => {

//   console.log(req.body)
//   const criteria = await Criterias.findByIdAndUpdate(req.params.id, req.body,{new:true});
//   res.send(criteria);
// })

module.exports = router;
