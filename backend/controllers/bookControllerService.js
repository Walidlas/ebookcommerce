const book = require("../models/book")


const getAllbooks = async (req,res) =>{
    try{
        const result = await book.find().populate("category")
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err:error})
    }
}
const getbookById = async(req, res)=>{
    try{
        const result = await book.findOne({_id:req.params.id})
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err:error})
    }
}

const deletebookById = async(req, res)=>{
    try{
        const result = await book.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({msg:"product deleted successfully"})
    }
    catch(error){
        res.status(500).json({err:error})
    }
}

const addbook = async(req, res)=>{
    try{
        const result = await book.create(req.body)
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err:error})
    }
}

const updatebook = async(req, res)=>{
    try{
        const result = await book.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({msg:"product deleted successfully"})
        
    }
    catch(error){
        res.status(500).json({err:error})
    }
}
module.exports = {
    getAllbooks,
    getbookById,
    deletebookById,
    addbook,
    updatebook
}