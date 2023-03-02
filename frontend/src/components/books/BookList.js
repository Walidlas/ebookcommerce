import { useState,useEffect } from 'react';
import axios from 'axios';
import bookService from '../../services/book.service'
import{Routes,Route,link, Link, BrowserRouter,Outlet, Navigate} from "react-router-dom"
function BookList()
{
    let [books,setBook]=useState([])
    useEffect(()=>{ getBook()},[])
   
    async function getBook(){   
        try{
            const result=await bookService.getAllBooks()
            setBook(result.data)
        }
        catch(error){
            console.log(error)
        }    
    }
    async function supprimerBook(i){
        try{
            if (window.confirm("tous les livres de cette categorie vont etre supprimer" ) == true) {
                
                await bookService.deleteById(i) 
                 getBook()
              }
        }
         catch(error)
         {
            console.log(error)
         }
       
    }
    
    return (
        <div> <table class="table table-striped">
            <thead class="thead-dark"> <tr>
               <th scope="col"> Id</th>
               <th scope="col">name</th>
               <th scope="col">Description</th>
               <th scope="col">isbn</th>
               <th scope="col">auteur</th>
               <th scope="col">editeru</th>
               <th scope="col">Date</th>
               <th scope="col">image</th>
               <th  scope="col">Supprimer</th>
               <th  scope="col">Modifier</th>
            </tr>
            </thead>
           <tbody> {books.map((elem,index)=>
            <tr key={elem._id}>
                <td>{index+1}</td>
                <td>{elem.name}</td>
                <td>{elem.description}</td>
                <td>{elem.isbn}</td>
                <td>{elem.auteur}</td>
                <td>{elem.editeru}</td>
                <td>{elem.date}</td>
                <td>{elem.image}</td>
                <td>{elem.category.name}</td>
                <td><button type="button"class="btn btn-secondary" onClick={()=>supprimerBook(elem._id)}>Supprimer</button></td>
                <td><button type="button"class="btn btn-secondary"><Link class="nav-link" to={`/book/edit/${elem._id}`}>Edit </Link></button></td>

            </tr>
            )}</tbody>
            
           
    </table>
    <br/>
    <div>

   <button className="btn" type="button"class="btn btn-secondary"><Link class="nav-link" to={'/book/Add'}>Ajouter book </Link></button>
    </div>
    </div>
           
  )
     
}          

  export default BookList


