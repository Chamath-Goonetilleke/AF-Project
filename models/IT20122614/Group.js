const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupid: {
    type: String,
    required: true,
  },
  // leadername: {
  //   type: String,
  //   required: true,
  // },
  // leaderitnumber: {
  //   type: String,
  //   required: true,
  // },
  // st2name: {
  //   type: String,
  //   required: true,
  // },
  // st2itnumber: {
  //   type: String,
  //   required: true,
  // },
  // st3name: {
  //   type: String,
  //   required: true,
  // },
  // st3itnumber: {
  //   type: String,
  //   required: true,
  // },
  // st4name: {
  //   type: String,
  //   required: true,
  // },
  // st4itnumber: {
  //   type: String,
  //   required: true,
  // },
  supercisorid: {
    type: String,
  },
  cosupercisorid: {
    type: String,
  },
  panelmember: {
    type: String,
  },

  report: String,
  presentation: String,
  proposal: String,
  Finalthesis: String,
  isOngoing: {
    type: Boolean,
  },
});

const Group = mongoose.model("researchgroups", groupSchema);
module.exports = Group;
