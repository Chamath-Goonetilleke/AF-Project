const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GetTopics = new Schema({
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

const topic = mongoose.model("registertopics", GetTopics);
module.exports = topic;