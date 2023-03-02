const express=require("express")
const router=express.Router()
const userController=require("../controllers/userControllerService")

router.route("/").get(userController.getUsers).post(userController.adduser)


module.exports=router