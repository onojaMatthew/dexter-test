var faker = require('faker');
const { Employee } = require("../model/employee")

exports.postEmployee = (req, res, next) => {
  const first_name =  faker.fake("{{name.firstName}}"),
    last_name = faker.fake("{{name.lastName}}"),
    address = faker.fake("{{address.streetName}}"),
    middle_initial = faker.fake("{{name.suffix}}"),
    city = faker.fake("{{address.city}}"),
    postal_code = faker.fake("{{address.zipCode}}")
    home_phone = faker.fake("{{phone.phoneNumber}}"),
    office_phone = faker.fake("{{phone.phoneNumber}}").
    office_location = faker.fake("{{address.streetName}}")

  let employee = new Employee();
  employee.first_name = first_name;
  employee.last_name = last_name;
  employee.middle_initial = middle_initial;
  employee.address = address;
  employee.city = city;
  employee.postal_code = postal_code;
  employee.home_phone = home_phone;
  employee.office_phone = office_phone;
  employee.office_location = office_location;

  employee.save((err, data) => {
    if (err || !data) return res.status(400).json({
      error: `Something went wrong. Error ${err.message}`
    })
    res.json(data)
  })
}
