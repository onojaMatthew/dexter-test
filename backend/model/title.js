const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const titleSchema = new Schema({
  title: { type: String },
  level: { type: Number },
  job_description: { type: String },
  low_pay: { type: Number },
  high_pay: { type: Number },
});

const Title = mongoose.model("Title", titleSchema);

exports.Title = Title;