const user = require("../models/user")
const bcrypt = require("bcrypt")


const adduser = async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt()
        req.body.password= await bcrypt.hash(req.body.password,salt)
        await user.create(req.body)
        res.status(200).json("bien ajoute")
    }
    catch(error){
        console.log(error)
        res.status(500).json({err:error})
    }
}

const getUsers = async(req,res)=>{
    try{
        const result = await user.find()
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({err:error})
    }
}

module.exports = {
    adduser,
    getUsers,

}