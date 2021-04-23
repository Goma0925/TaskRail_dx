const express = require('express');
const GoogleAuth = require("../middleware/GoogleAuth");

const rootRouter = express.Router();

// Test - TO be deleted
const UserOperations = require("../common_db_operations/UserOperations");
const testMiddleware = async (req, res, next) => {
    const result = await UserOperations.getUserByEmail("zerogravity569@gmail.com");
    req.app.locals.user =  result.user;
    next();
}
// 

// Path configurations
rootRouter.use('/taskdata/', GoogleAuth.requireAuth, require('./TaskRouter.js'));
rootRouter.use('/auth/', require('./AuthRouter.js'));

rootRouter.route("/").get((req, res)=>{
    console.log("Root acceessed");
});

module.exports = rootRouter; 