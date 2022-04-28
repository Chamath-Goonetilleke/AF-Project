const { mongoose } = require("mongoose");

const markingSchema = mongoose.Schema({
  
  name: { type: String, required: true },
});

const MarkingRubrik = mongoose.model("MarkingRubrik", markingSchema);
exports.MarkingRubrik = MarkingRubrik;