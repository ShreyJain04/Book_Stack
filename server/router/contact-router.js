const express= require('express');
const router= express.Router();
const contactForm= require("../controllers/contact-controllers")
const contactusSchema= require("../validators/contact-validator");
const validate= require("../midllewares/validate-middleware")

router.route("/contact").post(validate(contactusSchema),contactForm);

module.exports= router;