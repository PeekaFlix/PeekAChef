import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from "../context/RecipeContext";
import Recipes from './Recipes'

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
  }, [])

  const cards = [];
  for (let i = 0; i < recipes.length; i++) {
    cards.push(<Recipes ingredient={ingredient} recipe={recipes[i].recipe} description={recipes[i].description} preparation_time={recipes[i].preparation_time} serving_size={recipes[i].serving_size} cook_time={recipes[i].cook_time} _id={recipes[i]._id}/>);
  }

  return (
    <div>
    Home

    {cards}
    
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