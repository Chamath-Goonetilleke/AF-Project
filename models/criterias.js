const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GetCriterias = new Schema({
    
  name: { type: String, reqired: true },
  value: { type: String, reqired: true },
  markingRubrikId: { type: String, reqired: true },
});

const Criterias = mongoose.model("Criterias", GetCriterias);
module.exports = Criterias;