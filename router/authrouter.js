const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authController");
const authMiddleware = require("../middleware/varificationMiddleware");
const registerSchema = require("../validator/validatorSchema");
const validate = require("../middleware/validateMiddleware");

router.route("/").get(authControllers.home);
router
  .route("/register")
  .post(validate(registerSchema), authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/user").get(authMiddleware, authControllers.userData);

module.exports = router;
