//import the express module
const express = require("express");
// call the router method from express to create the router
const router = express.Router();

// import the employee controller
const employeeController = require("../controllers/employee.controller");
// import the auth middleware
const authMiddleware = require("../middlewares/auth.middleware");
// create a route to handel the add employee request on post
router.post("/api/employee", [authMiddleware.verifyToken,authMiddleware.isAdmin],employeeController.createEmployee);

//add the middleware function to the route to get all employees

//Export the router
module.exports = router;
