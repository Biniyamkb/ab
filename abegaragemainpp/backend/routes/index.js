
// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
// Import the employee routes
const employeeRouter = require("./employee.routes");
const loginRouter = require("./login.routes");
// Add the install router to the main router
router.use(installRouter);
// Add the employee routes to the main router
router.use(employeeRouter);
//add the login routes to the main router
router.use(loginRouter);
// Add the login routes to the main router
// Export the router
module.exports = router;
