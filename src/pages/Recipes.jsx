import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from "../context/RecipeContext";

function Recipes(props) {
  const { _id, ingredient, recipe, description, preparation_time, serving_size, cook_time } = props
  const [expand, setExpand] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const reqBody = {
      recipe_id: _id
    };
      fetch('http://localhost:8080/ingredients/getIngredients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
      })
        .then((res) => res.json())
        .then((data) => {
          setIngredients(data);
        }).catch(err => {
          console.log(err)
        })
  }, [])

  const handleExpand = () => {
    setExpand(!expand);
  }

  const ingredientsRender = []
  if (ingredients && !expand) {
    console.log(ingredients.length)
    ingredientsRender.push(<p className="card-text">Ingredients: {}</p>)
    for (let i = 0; i < ingredients.length; i++) {
      ingredientsRender.push(
        <div>
          <ul>
            <li>{ingredients[i].amount}{ingredients[i].name}</li>
          </ul>
        </div>
      );
    }
  }

  return (
    <div key={recipe._id} className="card text-center ms-4" style={{ width: '18rem' }}>
      <div className="card-body">
        { !expand ? 
          <div className="expandBtn" onClick={handleExpand}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
              <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
            </svg>
          </div> :
          <div className="expandBtn" onClick={handleExpand}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
            </svg>
          </div>
        }
        <h5 className="card-title">{recipe}</h5>
        <p className="card-text">Description: {description}</p>
        <p className="card-text">Preparation Time: {preparation_time} minutes </p>
        <p className="card-text">Serving Size: {serving_size} people </p>
        <p className="card-text">Cook Time: {cook_time} minutes </p>
        {ingredientsRender}
      </div>
    </div> 
  )
}

export default Recipes
