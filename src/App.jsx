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
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <ul className="navbar-nav float-end">
                            <li className="nav-item"><Link to='/home'>Home</Link></li>
                            <li className="nav-item"><Link to='/signup'>Signup</Link></li>
                            <li className="nav-item"><Link to='/login'>Login</Link></li>
                            <li className="nav-item"><Link to='/addrecipe'>Add Recipe</Link></li>
                        </ul>
                    </div>
                </nav>
                App
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