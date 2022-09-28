const express=require('express');
const usrrouter=express.Router();
const userControler = require("./user.controller");

usrrouter.get("/",userControler.getUsers);
usrrouter.post("/",userControler.createUser);
usrrouter.post("/login",userControler.login);
//usrrouter.post("/",()=>{console.log("user hit")});
//usrrouter.post("/login",()=>{console.log("login hit")});

module.exports=usrrouter;