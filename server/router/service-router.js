const express= require('express');
const router= express.Router();
const service= require("../controllers/service-controller");

router.route("/service").get(service);

module.exports= router;