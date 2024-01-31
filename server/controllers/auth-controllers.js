const User = require("../models/user-model");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config()


const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to MERN Project using Router");
  } catch (err) {
    console.log(err);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExits = await User.findOne({ email });

    if (userExits) {
      return res.status(400).json({ message: "email already exists!" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      message: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(404).send({msg:"Page not found"});
    next(error); //for showing error through error middleware
  }
};

//User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExits = await User.findOne({ email });

    if (!userExits) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await userExits.comparePassword(password); //comparing password

    if (user) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExits.generateToken(),
        userId: userExits._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//forget password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const userExists = await User.findOne({ email });


    if (!userExists) {
      return res.status(400).json({ message: "This email is not registered" });
    }


    const JWT_SECRET_CODE = process.env.JWT_SECRET;

    const token = jwt.sign({ id: userExists._id }, JWT_SECRET_CODE, {
      expiresIn: "1d",
    });

    console.log("yaha tak thik hai!")

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jainshrey200349@gmail.com",
        pass: "zgxe wukr zefa wunm",
      },
    });

    let mailOptions = {
      from: "jainshrey200349@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `http://localhost:5173/reset-password/${userExists._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({ Status: "Success" });
      }
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//reset password
const resetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;
    const JWT_SECRET_CODE = process.env.JWT_SECRET;

    jwt.verify(token, JWT_SECRET_CODE, (err, decoded) => {
      if (err) {
        return res.json({ status: "Error with token" });
      } else {
        bcrypt
          .hash(password, 10)
          .then(hash => {
            User.findByIdAndUpdate({ _id: id }, { password: hash })
              .then(u => res.send({ Status: "Success" }))
              .catch((err) => res.send({ Status: err }));
          })
          .catch(err => res.send({ Status: err }));
      }
    });
  } catch (error) {
    console.log("token error", error);
  }
};

//user logic: to send user logic

const user = async (req, res) => {
  try {
    const userData = req.user; //we created custom property 'user' in auth-middleware
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user, forgotPassword, resetPassword };
