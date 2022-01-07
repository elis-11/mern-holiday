const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// -----------REGISTR----------------
router.post(
  "/registration",

  [
    check("email", "wrong email").isEmail(),
    check("password", "wrong password").isLength({ min: 4 }),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong data by registration",
        });
      }

      const { email, password } = req.body;

      const isUsed = await User.findOne({ email });

      if (isUsed) {
        return res
          .status(300)
          .json({ message: "This Email already exist, please try again." });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        email,
        password: hashedPassword,
      });

      await user.save();

      // res.status(201).json({ message: "User created!" });
      res.status(500).json(e.message);
    } catch (error) {
      console.log(error);
    }
  }
);

//-----------LOGIN---------------
router.post(
  "/login",

  [
    check("email", "wrong email").isEmail(),
    check("password", "wrong password").exists(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong data by registration",
        });
      }
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "such email does not exist" });
      }

      const isMatch = bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "passwords mismatch" });
      }

      const jwtSecret = "foiazwfghsgddkagbyxjkahdgjhcks";

      const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
