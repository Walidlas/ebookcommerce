import http from "./http.common"
async function getAll ()
{
   return await http.get("books/")
}
async function getById(id)
{
   return await http.get(`books/${id}`)
}

async function deleteById(id)
{
   return await http.delete(`books/${id}`)
}

async function addBook(book)
{
   return await http.post(`books/`,book)
}
async function updateBook(book)
{
   return await http.put(`/${book._id}`,book)
}
const bookService={getAll,getById,deleteById,addBook,updateBook}

export default bookService;