const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupid: {
    type: String,
    required: true,
  },
  supercisorid: {
    type: String,
  },
  cosupercisorid: {
    type: String,
  },
  panelmember: {
    type: String,
  },
});

const Group = mongoose.model("researchgroups", groupSchema);
module.exports = Group;
