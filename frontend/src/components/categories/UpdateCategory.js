import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import{Routes,Route,link, Link, BrowserRouter,Outlet} from "react-router-dom"
import catService from '../../services/category.service';

function UpdateCategory(){

    const [nom,setNom]=useState("")
    const [description,setDescription]=useState("")

    const navigate=useNavigate()
   
    const {id}=useParams()
 
    useEffect(()=>{
        getCat()
    },[])
  async function getCat(){
    const cat = await catService.getCategorieById(id);
    setNom(cat.data.name)
    setDescription(cat.data.description)

  }
   
    async function submitCat(e){
        e.preventDefault()
        const C={"name":nom,"description":description}
        await catService.updateCat(id,C)
        navigate("/Category")
    }
    
    return(

        <form onSubmit={(e)=>submitCat(e)}>
              <div class="form-group"> 
              <label htmlFor ="nom">Nom :</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} name="nom"/><br/>
            </div>

            <div class="form-group"> 
              <label htmlFor ="description">Description :</label>
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name="description"/><br/>
            </div>
            
            <input type="submit"  class="btn btn-primary mb-2"/>
        </form>
    )
}

export default UpdateCategory