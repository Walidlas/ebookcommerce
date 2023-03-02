import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bookService from '../../services/book.service';
import catService from '../../services/category.service';

function AddBook()
{
    const [nom,setNom]=useState("")
    const [description,setDescription]=useState("")
    const [isbn,setIsbn]=useState("")
    const [auteur,setAuteur]=useState("")
    const [editeur,setEditeur]=useState("")
    const [image,setImage]=useState("")
    const [categories,setCategories]=useState([])
    const [selectedcat,setselectedcat]=useState(0)
    const navigate=useNavigate()
   useEffect(()=>{
    getCategories()
   },[])
   async function getCategories(){
    const res= await catService.getAllCategories()
    setCategories(res.data)
   }
    async function submitBook(e){
        e.preventDefault()
        const C={"name":nom,"description":description,"isbn":isbn,"auteur":auteur,"editeru":editeur,"date_publication":datepub,"image":image,"category":categories[selectedcat]}
        await bookService.addBook(C)
        //navigate("/Books")
    }
    
    return(

        <form onSubmit={(e)=>submitBook(e)}>
            <div class="form-group"> 
            <label htmlFor ="nom">Nom :</label>
            </div>
            <div class="form-group">
                <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} name="nom"/><br/>
            </div>

            <div class="form-group"> 
            <label htmlFor ="description">Description :</label>
            </div>
            <div class="form-group">
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name="description"/><br/>
            </div>

            <div class="form-group"> 
            <label htmlFor ="isbn">isbn :</label>
            </div>
            <div class="form-group">
                <input type="text" value={isbn} onChange={(e)=>setIsbn(e.target.value)} name="isbn"/><br/>
            </div>

            <div class="form-group"> 
            <label htmlFor ="auteur">auteur :</label>
            </div>
            <div class="form-group">
                <input type="text" value={auteur} onChange={(e)=>setAuteur(e.target.value)} name="auteur"/><br/>
            </div>

            <div class="form-group"> 
            <label htmlFor ="editeur">editeur :</label>
            </div>
            <div class="form-group">
                <input type="text" value={editeur} onChange={(e)=>setEditeur(e.target.value)} name="editeur"/><br/>
            </div>

            
            <select value={selectedcat} onChange={(e)=>setselectedcat(e.target.value)}>
                {categories.map((elem,index)=>{
                    return<option key={index} value={index}>
                        {elem.name}
                    </option>
                }) }

            </select>
           
            <input  class="btn btn-primary mb-2" type="submit" />
           
        </form>
    )
}

export default AddBook;