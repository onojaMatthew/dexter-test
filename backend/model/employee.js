const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const employeeSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  middle_initial: { type: String },
  sex: { type: String },
  address: { type: String },
  city: { type: String },
  region: { type: String },
  postal_code: { type: Number },
  home_phone: { type: String },
  office_phone: { type: String },
  office_location: { type: String },
  manager_id: { type: ObjectId, ref: "Manager" },
  vacation_hours: { type: Number },
  sick_leave_hours: { type: Number }
});

const Employee = mongoose.model("Employee", employeeSchema);

exports.Employee = Employee;