import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import catService from '../../services/category.service';

function AddCategory()
{
    const [nom,setNom]=useState("")
    const [description,setDescription]=useState("")
    const navigate=useNavigate()
   
    async function submitCat(e){
        e.preventDefault()
        const C={"name":nom,"description":description}
        await catService.AddCategory(C)
       navigate("/Category")
    }
    
    return(

        <form onSubmit={(e)=>submitCat(e)}>
            <div class="form-group"> 
            <label htmlFor ="nom">Nom :</label>
            </div>
            <div class="form-group">
                <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} name="nom"/><br/>
            </div>  

            <div class="form-group"> 
            <label htmlFor ="Description">Description :</label>
            </div>
            <div class="form-group">
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name="Description"/><br/>
            </div>          
            
                
            <input  class="btn btn-primary mb-2" type="submit" />
           
        </form>
    )
}

export default AddCategory;