const Contacts = require("../model/contactSchema");

const getAllcontact = async (req, res) => {
  try {
    const contacts = await Contacts.find();
    if (!contacts || contacts.length === 0) {
      res.status(400).json({ message: " no such contacts" });
    }else{

      res.status(200).json(contacts);
    }
  } catch (error) {
    res.status(400).json({ message: "somthing went wrong" });
  }
};
module.exports = getAllcontact;
