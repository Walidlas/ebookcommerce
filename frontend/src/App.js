import logo from './logo.svg';
import './App.css';
import{Routes,Route,link, Link, BrowserRouter,Outlet} from "react-router-dom"
import Home from './components/home/Home';
import NavScrollExample from './components/home/NavScrollExample';
import AddCategory from './components/categories/AddCategory';
import CategoryList from './components/categories/CategoryList';
import UpdateCategory from './components/categories/UpdateCategory';
import BookList from './components/books/BookList';



function App() {
  return (
    <>
      <NavScrollExample/>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Category' element={<CategoryList />}/>
          <Route path='/Category/Add' element={<AddCategory />}/>
          <Route path='/Category/edit/:id' element={<UpdateCategory />}/>
       
          <Route path='/book' element={<BookList />}/>
         

       </Routes>
    </BrowserRouter>
       
    </>
  );
}

export default App;
