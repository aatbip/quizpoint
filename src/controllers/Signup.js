const signUpSchema = require("../models/signup");


const userSignUp = async (req, res) => {
  

  let { firstName, lastName, userName, password } = req.body;
  const checkUserName = signUpSchema.findOne({ userName: userName });
  
  if (checkUserName) {
    res.render("registerFailedMessage");
  }

  let newUser = new signUpSchema({ firstName, lastName, userName, password });
  await newUser.save()
  
  res.render("registerMessage"); 
};
module.exports = userSignUp;
