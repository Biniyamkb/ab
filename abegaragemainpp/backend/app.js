const express = require("express");
require("dotenv").config();
const sanitize = require("sanitize");
const cors = require("cors");
// const corsOptions = {
//   origin: process.env.FRONTEND_URL,
//   optionsSuccessStatus: 200,
// };
const corsOptions = {
  origin: process.env.FRONTEND_URL.replace(/\/$/, ""), // Remove trailing slash if present
  optionsSuccessStatus: 200,
};
// Create a variable to hold our port number
const port = process.env.PORT;
// Import the router
const router = require("./routes");
// Create the webserver
const app = express();
// Add the CORS middleware
app.use(cors(corsOptions));
// Add the express.json middleware to the application
app.use(express.json());
// Add the sanitizer to the express middleware
app.use(sanitize.middleware);
// Add the routes to the application as middleware
app.use(router);
// Start the webserver
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
// Export the webserver for use in the application
module.exports = app;
