const Users = require("../model/userSchema");
const Contacts = require("../model/contactSchema");
const getAllusers = async (req, res) => {
  try {
    const user = await Users.find({}, { password: 0, cpassword: 0 });
    if (!user || user.length === 0) {
      res.status(404).json({ message: "no such users" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserBtId = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await Users.findOne(
      { _id: id },
      { password: 0, cpassword: 0 }
    );
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json("bad request");
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const newData = await Users.updateOne(
      { _id: id },
      {
        $set: updatedData,
      }
    );
    res.status(200).json(newData);
  } catch (error) {
    res.status(400).json("bad request");
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await Users.deleteOne({ _id: id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json("bad request");
  }
};

const deleteContacts = async (req, res) => {
  try {
    const id = req.params.id;
    await Contacts.deleteOne({ _id: id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json("bad request");
  }
};

module.exports = {
  getAllusers,
  deleteUser,
  getUserBtId,
  updateUser,
  deleteContacts,
};
