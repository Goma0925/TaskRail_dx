const express = require('express');
const GoogleAuth = require("../middleware/GoogleAuth");
const rootRouter = express.Router();

// Path configurations
rootRouter.use('/api', require("./ApiRouter"));
rootRouter.use("/", require("./StaticRouter"));

module.exports = rootRouter; 