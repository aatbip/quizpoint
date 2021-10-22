const express = require("express");
//const dotenv = require("dotenv");
const cors = require("cors");
//const router = express.Router();
const path = require("path");
const hbs = require("hbs");
const dbConnection = require("./utils/dbConnection");
const router = require("./routes/index")

require("dotenv").config();
const app = express();

//database connection
dbConnection();

//server middleware
app.use(express.json());
const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);

//renders
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sign_up", (req, res) => {
  res.render("sign_up"); 
});

app.get("/api/sign_up", (req, res) => {
  res.render("sign_up"); 
});

 

// Error handling middleware
app.use(function (err, req, res, next) {
  console.log("****SERVER_ERROR****");
  console.log(err);
  return res.status(500).json(failure(err.message || "Something went wrong!"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app; 
//module.exports = registerMsg; 
