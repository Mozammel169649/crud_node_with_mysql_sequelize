// import express from "express";
// import cors from "cors";
// import route from "./app/student/router/route.js";
const express =  require("express")
const cors =  require("cors")
const route =  require("./app/student/router/route.js")
const app = express();
const bodyParser = require("body-parser");
const formData = require('express-form-data');

app.use(cors())
app.use(bodyParser.json());
app.set('json spaces', 4);
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(formData.parse());
const PORT = process.env.PORT || 8082
app.use(route())
app.listen(PORT, ()=>{
    console.log(`app in running on port http://127.0.0.1:${PORT}`);
})