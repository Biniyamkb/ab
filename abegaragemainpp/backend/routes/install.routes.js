//import the express module
const express = require("express");


const router = express.Router();

// import the install controller
const installController = require("../controllers/install.controller");

router.get('/install', installController.install);

//export the router
module.exports = router;