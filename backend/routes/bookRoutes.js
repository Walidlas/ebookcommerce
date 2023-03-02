const express=require("express")
const router=express.Router()
const booksController=require("../controllers/bookControllerService")

router.get("/",booksController.getAllbooks)
router.get("/:id",booksController.getbookById)
router.delete("/:id",booksController.deletebookById)
router.put("/:id",booksController.updatebook)
router.post("/",booksController.addbook)

module.exports=router