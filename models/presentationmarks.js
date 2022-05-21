const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Presentationmarks = new Schema({
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

const presentationmarks = mongoose.model("presentationmarks", Presentationmarks);
module.exports = presentationmarks;