const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Presentation = new Schema({
  groupid: {
    type: String,
  },
  topic: {
    type: String,
  },
  message: {
    type: String,
  },
  file: {
    type: String,
  },
  field: {
    type: String,
  },
  status: {
    type: String,
  },
});

const presentation = mongoose.model("presentation", Presentation);
module.exports = presentation;