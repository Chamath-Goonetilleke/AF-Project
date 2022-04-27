const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topicRegister = new Schema({
  groupe: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

const Topic = mongoose.model("registertopics", topicRegister);
module.exports = Topic;
