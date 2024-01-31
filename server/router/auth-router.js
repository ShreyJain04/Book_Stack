const express= require('express');
const router= express.Router();
const {home,register,login,user,forgotPassword,resetPassword}= require("../controllers/auth-controllers");
const signupSchema = require("../validators/auth-validator")
const loginSchema= require("../validators/login-validator")
const forgotPasswordSchema= require("../validators/forgot-password-validator")
const authMiddleware= require("../midllewares/auth-middleware")
const validate= require("../midllewares/validate-middleware")



router.route("/").get(home);

router.route("/register").post(validate(signupSchema),register);

router.route("/login").post(validate(loginSchema),login);

router.route("/user").get(authMiddleware,user);

router.route("/forgot-password").post(validate(forgotPasswordSchema),forgotPassword);

router.route("/reset-password/:id/:token").post(resetPassword);

module.exports= router;