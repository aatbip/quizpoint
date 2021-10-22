const signUpSchema = require("../models/signup");


const userSignUp = async (req, res) => {
  
try {
  let { firstName, lastName, userName, password } = req.body;
  const checkUserName = await signUpSchema.findOne({ userName: userName });
  
  if (checkUserName) {
    res.render("registerFailedMessage");
  }

  let newUser = new signUpSchema({ firstName, lastName, userName, password });
  await newUser.save()
  
  res.render("registerMessage"); 
}
catch {
    console.log("Something is wrong");
  }
};
module.exports = userSignUp;
