const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("../controllers/user.controller");


/* /users/register [GET] */

router.get("/register", userController.registerViewController);

/* /users/register [POST] */
router.post("/register", userController.registerUserController);

/* /users/profile [GET] {Protected Route} */

router.get("/profile",
  (req, res, next) => {
    try {
      // console.log(req.cookies);

      const decoded = jwt.verify(req.cookies.token, "node-auth-secret");
      

      req.user = decoded;

      next();
    } catch (error) {
      res.status(401).send("Unauthorized");
    }
  },
  userController.profileViewController
);

module.exports = router;

//  Cookie Set Example: res.cookie("token", value);
//  Cookie Access Example: req.cookies.token;
