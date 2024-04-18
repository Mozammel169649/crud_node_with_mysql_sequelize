const express = require("express");
const controllers = require("../controller/controller");
const router = express.Router();

let prefix = 'student'
router
    .get(`/${prefix}/details/:id`, controllers.details)  
    .get(`/${prefix}/all`, controllers.all)                   // all data
    .post(`/${prefix}/store`, controllers.create)               // create data
    .post(`/${prefix}/delete/:id`, controllers.destroy)             // delete data
    .post(`/${prefix}/update/:id`, controllers.update)              // edit data
    


module.exports = () => router;