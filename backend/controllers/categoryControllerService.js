const category = require("../models/category")


const getAllcategories = async(req,res)=>{
    try{
        const result = await category.find()
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err:error})
    }
}

const getcategoryById = async(req, res)=>{
    try{
        const result = await category.findOne({_id:req.params.id})
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err:error})
    }
}

const deletecategoryById = async(req, res)=>{
    try{
        await category.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"category deleted successfully"})
    }
    catch(error){
        res.status(500).json({err:error})
    }
}

const addcategory = async(req, res)=>{
    try{
        await category.create(req.body);
        res.status(200).json({msg:"category added successfully"})
    }
    catch(error){
        res.status(500).json({err:error})
    }
}

const updatecategory = async(req, res)=>{
    try{
        const result = await category.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(result)
        
    }
    catch(error){
        res.status(500).json({"err":error})
    }
}
module.exports = {
    getAllcategories,
    getcategoryById,
    deletecategoryById,
    addcategory,
    updatecategory
}