// import React, { use, useEffect, useState } from "react";
// import { Table, Button } from "react-bootstrap";
// import { useAuth } from "../../../../Context/AuthContext";
// import { format } from "date-fns";
// import employeeService from "../../../../services/employee.service";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [apiError, setApiError] = useState(false);
//   const [apiErrorMessage, setApiErrorMessage] = useState(null);

//   const { employee } = useAuth();
//   let token = null;
//   if (employee) {
//     token = employee.employee_token;
//   }
//   useEffect(() => {
//     const allEmployees = employeeService.getAllEmployees(token);
//     allEmployees.then((res) => {
//       console.log(res);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Employees List</h1>
//     </div>
//   );
// };

// export default EmployeeList;