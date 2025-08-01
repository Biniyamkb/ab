//import the employee service
const employeeService = require("../services/employee.service");
// create the add employee controller
async function createEmployee(req, res, next) {
  console.log(req.headers);

  console.log("Request body:", req.body);
  //check if employee email already exist in the database
  const employeeExist = await employeeService.checkIfEmployeeExists(
    req.body.employee_email
  );
  //if employee exists , send response to the client
  if (employeeExist) {
    res.status(400).json({
      error: "This email address is already associated with another emmployee",
    });
  } else {
    const employeeData = req.body;

    //create the employee
    const employee = await employeeService.createEmployee(employeeData);
    if (!employee) {
      res.status(400).json({
        error: "Failed to add the employee",
      });
    } else {
      res.status(200).json({
        status: "True",
      });
    }
    try {
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: "Somthing went wrong ! ",
      });
    }
  }
}

module.exports = {
  createEmployee,
};
