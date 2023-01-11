import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from "../context/RecipeContext";

function Home() {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const navigate = useNavigate();

  useEffect(()=> {
    const getRecipes = async () => {
      try { 
        const result = await axios("http://localhost:3000/api/getAll")
      setRecipes(result.data.recipes)   
      getRecipes()
    } catch(err){}
    console.log(err)
    } 
  })

  return (
    <div>
    Home

  <div>{JSON.stringify(recipes)}</div>

    <div className="card text-center ms-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  )
}

export default Home
