const{Router}=require("express");
const controller=require("./controller");
const { checkToken } = require("../Auth/token_validation");
const router=Router();

router.get("/",checkToken,controller.getPatients);
router.post("/",checkToken,controller.addPatients);
 
 


module.exports=router;