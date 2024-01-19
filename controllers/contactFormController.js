const Contact = require("../model/contactSchema");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ msg: "created", });
  } catch (error) {
    res.status(404).json({ msg: "rejected" });
  }
};
module.exports = contactForm;
