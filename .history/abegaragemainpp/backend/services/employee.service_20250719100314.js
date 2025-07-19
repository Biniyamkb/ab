// // Import the query function from the db.config.js file
// const conn = require("../config/db.config");
// // Import the bcrypt module
// const bcrypt = require("bcrypt");
// // A function to check if employee exists in the database
// async function checkIfEmployeeExists(email) {
//   const query = "SELECT * FROM employee WHERE employee_email = ? ";
//   const rows = await conn.query(query, [email]);
//   console.log(rows);
//   if (rows.length > 0) {
//     return true;
//   }
//   return false;
// }

// // A function to create a new employee
// async function createEmployee(employee) {
//   let createdEmployee = {};
//   try {
//     // Generate a salt and hash the password
//     const salt = await bcrypt.genSalt(10);
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(employee.employee_password, salt);
//     // Insert the email in to the employee table
//     const query =
//       "INSERT INTO employee (employee_email, active_employee) VALUES (?, ?)";
//     const rows = await conn.query(query, [
//       employee.employee_email,
//       employee.active_employee,
//     ]);
//     console.log(rows);
//     if (rows.affectedRows !== 1) {
//       return false;
//     }
//     // Get the employee id from the insert
//     const employee_id = rows.insertId;
//     // Insert the remaining data in to the employee_info, employee_pass, and employee_role tables
//     const query2 =
//       "INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?, ?, ?, ?)";
//     const rows2 = await conn.query(query2, [
//       employee_id,
//       employee.employee_first_name,
//       employee.employee_last_name,
//       employee.employee_phone,
//     ]);
//     const query3 =
//       "INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?)";
//     const rows3 = await conn.query(query3, [employee_id, hashedPassword]);
//     const query4 =
//       "INSERT INTO employee_role (employee_id, company_role_id) VALUES (?, ?)";
//     const rows4 = await conn.query(query4, [
//       employee_id,
//       employee.company_role_id,
//     ]);
//     // construct to the employee object to return
//     createdEmployee = {
//       employee_id: employee_id,
//     };
//   } catch (err) {
//     console.log(err);
//   }
//   // Return the employee object
//   return createdEmployee;
// }

// // A function to get employee by email
// async function getEmployeeByEmail(employee_email) {
//   const query =
//     "SELECT * FROM employee INNER JOIN employee_info ON employee.employee_id = employee_info.employee_id INNER JOIN employee_pass ON employee.employee_id = employee_pass.employee_id INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id WHERE employee.employee_email = ?";
//   const rows = await conn.query(query, [employee_email]);
//   return rows;
// }

// // Export the functions for use in the controller
// module.exports = {
//   checkIfEmployeeExists,
//   createEmployee,
//   getEmployeeByEmail,
// };



// Import the employee service 
const employeeService = require('../services/employee.service');
// Create the add employee controller
async function createEmployee(req, res, next) {

  // console.log(req.headers); 

  // Check if employee email already exists in the database 
  const employeeExists = await employeeService.checkIfEmployeeExists(req.body.employee_email);
  // If employee exists, send a response to the client
  if (employeeExists) {
    res.status(400).json({
      error: "This email address is already associated with another employee!"
    });
  } else {
    try {
      const employeeData = req.body;
      // Create the employee
      const employee = await employeeService.createEmployee(employeeData);
      if (!employee) {
        res.status(400).json({
          error: "Failed to add the employee!"
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(err);
      res.status(400).json({
        error: "Something went wrong!"
      });
    }
  }
}

// Create the getAllEmployees controller 
async function getAllEmployees(req, res, next) {
  // Call the getAllEmployees method from the employee service 
  const employees = await employeeService.getAllEmployees();
  // console.log(employees);
  if (!employees) {
    res.status(400).json({
      error: "Failed to get all employees!"
    });
  } else {
    res.status(200).json({
      status: "success",
      data: employees,
    });
  }
}

// Export the createEmployee controller 
module.exports = {
  createEmployee,
  getAllEmployees
};