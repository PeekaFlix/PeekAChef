import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import AddRating from './pages/AddRating';
import { RecipeContextProvider } from './context/RecipeContext';

function App () {
    //navigate to a requested URL on component mount  //*does not work
    // const navigate = useNavigate();
    // const location = useLocation();
    // useEffect(() => {
    //     navigate(location.path);
    // }, [])

    return (
        
            <BrowserRouter>
              <RecipeContextProvider>
                <h1 className='title'> Peek-A-Chef </h1>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <ul className="navbar-nav float-end">
                            <li className="nav-item"><Link to='/home' class="text-decoration-none">Home</Link></li>
                            <li className="nav-item"><Link to='/signup' class="text-decoration-none">Signup</Link></li>
                            <li className="nav-item"><Link to='/login' class="text-decoration-none">Login</Link></li>
                            <li className="nav-item"><Link to='/addrecipe' class="text-decoration-none">Add Recipe</Link></li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={ <Login /> } />
                    <Route path='/signup' element={ <Signup /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/home' element={ <Home /> } />
                    <Route path='/addrating' element={ <AddRating /> } />
                    <Route path='/addrecipe' element={ <AddRecipe /> } />
                </Routes>
              </RecipeContextProvider>
            </BrowserRouter>
    )
}


export default App;