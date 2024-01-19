const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const key = "riturajgupta";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  // console.log(this);
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign({ user: "rituraj", data: this._id }, "rituraj", {
      expiresIn: "30d",
    });
  } catch (error) {
    console.log(error);
  }
};

const Users = mongoose.model("users", userSchema);
module.exports = Users;
