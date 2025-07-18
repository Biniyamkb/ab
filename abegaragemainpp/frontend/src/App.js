import { Route, Routes } from "react-router";

import Home from "./markup/components/pages/Home";
import Login from "./markup/components/pages/Login";
import AddEmpoyee from "./markup/components/pages/admin/AddEmployee";
import Unauthorized from "./markup/components/pages/Unauthorized";
import Orders from "./markup/components/pages/admin/Orders";
import Coustomers from "./markup/components/pages/admin/Coustomers";
import Employees from "./markup/components/pages/admin/Employees";

import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";

import Footer from "./markup/components/Footer/Footer";
import Header from "./markup/components/Header/Header";

// import css files
import "./assets/templete_assets/css/bootstrap.css";
import "./assets/templete_assets/css/style.css";
import "./assets/templete_assets/css/responsive.css";
import "./assets/templete_assets/css/color.css";

//import custom.css
import "./assets/styles/custom.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Coustomers />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmpoyee />
            </PrivateAuthRoute>
          }
        />

        <Route path="/admin/employees" element={<Employees />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
