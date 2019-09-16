var faker = require('faker');
const { Employee } = require("../model/employee")

exports.postEmployee = (req, res, next) => {
  const first_name =  faker.fake("{{name.firstName}}"),
    last_name = faker.fake("{{name.lastName}}")
    address = faker.fake("{{address.streetName}}"),
    city = faker.fake("{{address.city}}"),
    postal_code = faker.fake("{{address.zipCode}}")
    home_phone = faker.fake("{{phone.phoneNumber}}"),
    office_phone = faker.fake("{{phone.phoneNumber}}")

  let employee = new Employee();
  employee.first_name = first_name;
  employee.last_name = last_name;
  employee.middle_initial = middle_initial;
  employee.address = address;
  employee.city = city;
  employee.postal_code = postal_code;

  employee.save((err, data) => {
    if (err || !data) return res.status(400).json({
      error: "Something went wrong"
    })
    res.json(data)
  })
}

//  first_name: { type: String, required: true },
//   last_name: { type: String, required: true },
//   middle_initial: { type: String },
//   sex: { type: String, required: true },
//   address: { type: String },
//   city: { type: String },
//   region: { type: String },
//   postal_code: { type: Number },
//   home_phone: { type: String },
//   office_phone: { type: String },
//   office_location: { type: String },
//   manager_id: { type: ObjectId, ref: "Manager" },
//   vacation_hours: { type: Number },
//   sick_leave_hours: { type: Number }