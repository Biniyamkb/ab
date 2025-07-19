import React from "react";

import { useAuth } from "../../../../Context/AuthContext";
import LoginForm from "../../LoginForm/LoginForm";
import AdminMenu from "../../Admin/AdminMenu/AdminMenu";



function Employees() {
  const { isLogged, isAdmin } = useAuth();
  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          
        </div>
      )
      
      
      
      
      <h1>Employees pages</h1>;
    } else {
      return (
        <div>
          <h1>You are not authorized to access this page</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Employees;

// import React from "react";
// // Import the auth hook
// import { useAuth } from "../../../../Context/AuthContext";
// // Import the Login component
// import LoginForm from "../../LoginForm/LoginForm";

// function Employees() {
//   // Destructure the auth hook
//   const { isLogged, isAdmin } = useAuth();

//   if (isLogged) {
//     if (isAdmin) {
//       return (
//         <div>
//           <h1>Employees Page</h1>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>You are not authorized to access this page</h1>
//         </div>
//       );
//     }
//   } else {
//     return (
//       <div>
//         <LoginForm />
//       </div>
//     );
//   }
// }

// export default Employees;
