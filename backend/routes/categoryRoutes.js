const express=require("express")
const router=express.Router()
const categoriesController=require("../controllers/categoryControllerService")

router.get("/",categoriesController.getAllcategories)
router.get("/:id",categoriesController.getcategoryById)
router.delete("/:id",categoriesController.deletecategoryById)
router.put("/:id",categoriesController.updatecategory)
router.post("/",categoriesController.addcategory)

module.exports=router