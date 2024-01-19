const jwt = require("jsonwebtoken");
const Users = require("../model/userSchema");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const JwtToken = token.replace("Bearer", "").trim();
    const varifyToken = jwt.verify(JwtToken, "rituraj");
    const userData = await Users.findOne({ _id: varifyToken.data });
    req.userBody = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    res.status(401).json({ message: " invalid Token" });
  }
};
module.exports = authMiddleware;
