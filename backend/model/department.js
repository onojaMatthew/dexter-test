const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const departmentSchema = new Schema({
  name: { type: String, required: true },
  manager_id: { type: ObjectId, ref: "Manger" }
});

const Department = mongoose.model("Department", departmentSchema);

exports.Department = Department;