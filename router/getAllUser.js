const express = require("express");
const getAllusersController = require("../controllers/getallUseraController");
const authMiddleware = require("../middleware/varificationMiddleware");
const adminMiddleware = require("../middleware/adminmiddleware");
const router = express.Router();

router
  .route("/usersdata")
  .get(authMiddleware, adminMiddleware, getAllusersController.getAllusers);

router
  .route("/usersdata/:id")
  .get(authMiddleware, adminMiddleware, getAllusersController.getUserBtId);

router
  .route("/usersdata/update/:id")
  .patch(authMiddleware, adminMiddleware, getAllusersController.updateUser);

router
  .route("/usersdata/delete/:id")
  .delete(authMiddleware, adminMiddleware, getAllusersController.deleteUser);

router
  .route("/usersdata/contacts/delete/:id")
  .delete(
    authMiddleware,
    adminMiddleware,
    getAllusersController.deleteContacts
  );

module.exports = router;
