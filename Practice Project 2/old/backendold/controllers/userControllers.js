const user = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validator = require("validator");

//creating json web token
const createToken = (id) => {
  jwt.sign({ id: id }, process.env.SECRETKEY, { expiresIn: "3d" });
};

//logging in a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "All Fields are required" });
  } else if (!validator.isEmail(email)) {
    res.status(400).json({ error: "Please enter a valid email" });
  } else {
    const oldUser = await user.findOne({ email });
    if (!oldUser) {
      return res.status(400).json({ error: "No user found with this email" });
    } else {
      const match = await bcrypt.compare(password, oldUser.password);
      if (!match) {
        return res.status(400).json({ error: "Incorrect Login Credentials" });
      } else {
        return res
          .status(200)
          .json({ user: oldUser, message: "Login Successful" });
      }
    }
  }
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ error: "All fields are required" });
  } else if (!validator.isEmail(email)) {
    res.status(400).json({ error: "Email address is not valid" });
  } else if (!password) {
    res.status(400).json({ error: "Password not strong enough" });
  } else {
    try {
      const emailAlreadyExists = await user.findOne({ email });

      if (emailAlreadyExists) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const newUser = await user.create({ name, email, password: hash });
      const token = createToken(newUser.id);
      return res.status(201).json({ user: newUser, token, message: "You have been signed up successfull!" });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: "Internal servers error" });
    }
  }
};

module.exports = { loginUser, signupUser };
