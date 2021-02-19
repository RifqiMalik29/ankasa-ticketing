const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  signUp: async (req, res) => {
      try {
        const errors = validationResult(req).array();
        if (!errors.length){
            const setData = req.body;
            const checkUser = await userModel.findOne(setData.email);

            if (checkUser) return res.status(400).json({ message: "Email already exist" });

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(setData.password, salt);
            const newData = { ...setData, password: hash };

            const newUser = new userModel(newData);
            const result = await newUser.save();

            res.status(201).json({ message: "Signup success", data: result });
        } else {
            res.status(400).json({ message: errors });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  },
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const chekUser = await userModel.findOne({ email });

      if (!chekUser) return res.status(404).json({ message: "Invalid User" });

      const checkPassword = await bcrypt.compare(password, chekUser.password);

      if (!checkPassword)
        return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        {
          id: checkUser._id,
          username: checkUser.username,
          email: checkUser.email,
          phone: checkUser.phone,
          selectedFile: checkUser.selectedFile,
          location: checkUser.location,
          cards: checkUser.cards,
          flightBooked: checkUser.flightBooked,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({ data: chekUser, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
