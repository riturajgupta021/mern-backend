const express = require("express");
const getAllcontact = require("../controllers/getAllcontactsController");
const authMiddleware = require("../middleware/varificationMiddleware");
const adminMiddleware = require("../middleware/adminmiddleware");
const router = express.Router();

router.route("/contacts").get(authMiddleware, getAllcontact);

module.exports = router;
