const installService = require("../services/install.service");

async function install(req, res, next) {
  const installMessage = await installService.install();
  if (installMessage.status === 200) {
    //if successful, send a response to the clinet
    res.status(200).json({
      message: installMessage,
    });
  } else {
    //if unsuccessful , send a response to the client
    res.status(500).json({
      message: installMessage,
    });
  }
}
module.exports = { install };
