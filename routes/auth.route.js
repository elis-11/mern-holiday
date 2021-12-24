const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs")


router.post("/registration",  

[
  check('email', 'wrong email').isEmail(),
  check('password', 'wrong password').isLength({min: 4})
],

async (req, res) => {
  try {

const errors=validationResult(req)
if(!errors.isEmpty()){
  return res.status(400).json({
    errors: errors.array(),
    message: 'wrong data by registration'
  })
}

    const { email, password } = req.body;

    const isUsed = await User.findOne({ email });

    if (isUsed) {
      return res
        .status(300)
        .json({ message: "This Email already exist, please try again." });
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({ message: "User created!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
