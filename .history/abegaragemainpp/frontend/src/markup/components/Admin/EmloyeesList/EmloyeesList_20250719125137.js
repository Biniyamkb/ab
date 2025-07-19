import React, { use, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useAuth } from "../../../../Context/AuthContext";
import { format } from "date-fns";
import employeeService from "../../../../services/employee.service";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);

  const { employee } = useAuth();
  let token = null;
  if (employee) {
    token = employee.employee_token;
  }
  
  useEffect(() => {
    // Call the getAllEmployees function
    const allEmployees = employeeService.getAllEmployees(token);
    allEmployees
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
          setApiError(true);
          if (res.status === 401) {
            setApiErrorMessage("Please login again");
          } else if (res.status === 403) {
            setApiErrorMessage("You are not authorized to view this page");
          } else {
            setApiErrorMessage("Please try again later");
          }
        }
        return res.json();
      })
      .then((data) => {
        if (data.data.length !== 0) {
          setEmployees(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Employees List</h1>
    </div>
  );
};

export default EmployeeList;

// // Import the necessary components
// import React, { useState, useEffect } from "react";
// import { Table, Button } from "react-bootstrap";
// // Import the auth hook
// import { useAuth } from "../../../../Context/AuthContext";
// // Import the date-fns library
// import { format } from "date-fns"; // To properly format the date on the table
// // Import the getAllEmployees function
// import employeeService  from "../../../../services/employee.service";

// // Create the EmployeesList component
// const EmployeesList = () => {
//   // Create all the states we need to store the data
//   // Create the employees state to store the employees data
//   const [employees, setEmployees] = useState([]);
//   // A state to serve as a flag to show the error message
//   const [apiError, setApiError] = useState(false);
//   // A state to store the error message
//   const [apiErrorMessage, setApiErrorMessage] = useState(null);
//   // To get the logged in employee token
//   const { employee } = useAuth();
//   let token = null; // To store the token
//   if (employee) {
//     token = employee.employee_token;
//   }

// useEffect(() => {
//   // Call the getAllEmployees function
//   const allEmployees = employeeService.getAllEmployees(token);
//   allEmployees
//     .then((res) => {
//       if (!res.ok) {
//         console.log(res.status);
//         setApiError(true);
//         if (res.status === 401) {
//           setApiErrorMessage("Please login again");
//         } else if (res.status === 403) {
//           setApiErrorMessage("You are not authorized to view this page");
//         } else {
//           setApiErrorMessage("Please try again later");
//         }
//       }
//       return res.json();
//     })
//     .then((data) => {
//       if (data.data.length !== 0) {
//         setEmployees(data.data);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

 
// };

// // Export the EmployeesList component
// export default EmployeesList;
