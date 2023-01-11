import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from "../context/RecipeContext";

function Home() {
  const { recipes, setRecipes, username, setUsername } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [expand, setExpand] = useState(true);
  const [ingredient, setIngredients] = useState([]);

  useEffect(()=> {
    console.log('username', username)
    console.log('recipes', recipes)
    const getRecipes = async () => {
      try { 
        const result = await axios("http://localhost:3001/recipes/getAll")
      setRecipes(result.data.recipes)   
      getRecipes()
      ////////////////////////
      setUsername(1)
      ////////////////////
    } catch(err){  
      console.log(err)
    }
  
    } 
  })

  const handleExpand = (recipeId) => {
    console.log(recipeId)
    setExpand(!expand);
    const reqBody = {
      recipe_id: recipeId
    };
    console.log(reqBody);
    fetch('/ingredients/getIngredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data);
        console.log(data);
      }).catch(err => {
        alert('username or password is invalid; try again or create a new account');
      })
  }

  const ingredients = []
  if (ingredient && !expand) {
    for (let i = 0; i < ingredient.length; i++) {
      ingredients.push(ingredient[i]);
    }
  }

  return (
    <div>
    Home

  <div>{JSON.stringify(recipes)}</div>
    { recipes && recipes.map(recipe => {
      return (
        <div key={recipe._id} className="card text-center ms-4" style={{ width: '18rem' }}>
          <div className="card-body">
            { !expand ? 
              <div className="expandBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                </svg>
              </div> :
              <div className="expandBtn" onClick={() => {handleExpand(recipe._id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                </svg>
              </div>
            }
            <h5 className="card-title">{recipe.recipe}</h5>
            <p className="card-text">Description: {recipe.description}</p>
            <p className="card-text">Preparation Time: {recipe.preparation_time} minutes </p>
            <p className="card-text">Serving Size: {recipe.serving_size} people </p>
            <p className="card-text">Cook Time: {recipe.cook_time} minutes </p>
          </div>
        </div> 
      )
    })}
    
  </div>
  )
}

export default Home

// cook_time
// : 
// 10
// description
// : 
// "hello"
// preparation_time
// : 
// 20
// recipe
// : 
// ""
// serving_size
// : 
// 2
// users_id
// : 
// 1
// _id
// : 
// 1