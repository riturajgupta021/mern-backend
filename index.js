const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/authrouter");
const contactRoute = require("./router/contactRouter");
const getAllUsers = require("./router/getAllUser");
const getAllcontact = require("./router/getAllContacts");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
require("./database/connection");

app.use(cors());
app.use(express.json());

app.use("/", authRoute);
app.use("/form", contactRoute);
app.use("/admin", getAllUsers);
app.use("/admin", getAllcontact);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
