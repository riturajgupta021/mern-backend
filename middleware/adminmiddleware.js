const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.userBody.isAdmin;
    if (!adminRole) {
      res.status(400).json({ messeage: "Access denied User is not admin" });
    } else {
      next();
    }
  } catch (error) {
    data;
  }
};
module.exports = adminMiddleware;
