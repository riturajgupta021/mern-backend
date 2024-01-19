const Users = require("../model/userSchema");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("hiii from router from controller");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    const { username, email, password, cpassword } = req.body;
    const userExist = await Users.findOne({ email });

    if (userExist) {
      res.status(400).json({ msg: "user  already exist" });
    } else {
      const finanlUser = await Users.create({
        username,
        email,
        password,
        cpassword,
      });

      res.status(201).json({
        msg: "registration succesful",
        token: await finanlUser.generateToken(),
        userId: finanlUser._id,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await Users.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Detailes" });
    }
    const comparePassword = await bcrypt.compare(password, userExist.password);

    if (comparePassword) {
      res.status(200).json({
        msg: "login succesful",
        token: await userExist.generateToken(),
        userId: userExist._id,
      });
    } else {
      res.status(401).json({ mes: "invalid password" });
    }
  } catch (error) {
    console.log(error);
  }
};

const userData = async (req, res) => {
  try {
    const userData = req.userBody;
    res.status(200).json({ userData });
  } catch (error) {
    res.status(401).json({ mes: "userData error" });
  }
};

module.exports = { home, register, login, userData };
