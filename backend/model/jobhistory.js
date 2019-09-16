const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const jobhistorySchema = new Schema({
  employee_id: { type: ObjectId, ref: "Employee" },
  date: { type: Date },
  title_id: { type: ObjectId, ref: "Title", required: true },
  department_id: { type: ObjectId, ref: "Department", required: true },
  pay: { type: Number, required: true };
});

const Jobhistory = mongoose.model("Jobhistory", jobhistorySchema);

exports.Jobhistory = Jobhistory;