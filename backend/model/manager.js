const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const managerSchema = new Schema({
  name: { type: String }
});

const Manager = mongoose.model("Manager", managerSchema);

exports.Manager = Manager;