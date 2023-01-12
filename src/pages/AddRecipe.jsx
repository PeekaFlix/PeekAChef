import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios"
import { RecipeContext } from "../context/RecipeContext";


function AddRecipe() {
  const { recipes, addRecipe, setRecipes, username } = useContext(RecipeContext)
  const [recipe, setRecipe] = useState("");
  const [description, setDescription] = useState("");
  const [preparation_time, setPreparation_time] = useState("");
  const [cook_time, setCook_time] = useState("");
  const [serving_size, setServing_size] = useState("");
  const [recipe_id, setRecipe_id] = useState("");
  
  //"name" is ingredient name
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const [ingredients, setIngredients] = useState(2);
  const [ingredientsObj, setIngredientsObj] = useState({});
  const [inputIngredient, setInputIngredient] = useState('');

  // function handleSubmit(e){

  //   e.preventDefault();
  //   const postRecipe = async () => {
  //     try {
  //     const response = await axios.post('http://localhost:3001/recipes/addRecipe', {

  //         data: 
  //         {
  //           recipe,
  //           description,
  //           preparation_time,
  //           cook_time,
  //           serving_size,
  //           recipe_id,
  //           //name is ingredient list

  //           ingredientsObj,
  //           amount
  //         } 
  //       })
  //       addRecipe(response.data.recipes)
     
  //     postRecipe()
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   } 
  // }

  function handleSubmit(e){
    console.log('in handleSubmit')
    e.preventDefault();
    
    const postRecipe = async () => {
      try {
        console.log('in postRecipe')
        console.log('username in postRecipe', username, 'recipe', recipe)
      const response = await axios.post('http://localhost:3001/recipes/addRecipe', 
          { users_id : username,
            recipe,
            description,
            preparation_time,
            cook_time,
            serving_size,
            // recipe_id,
            //name is ingredient list

            ingredientsObj: ingredientsObj,
            amount
          } 
        )
        // addRecipe(response.data.recipes)
     
   
      } catch(err) {
        console.log(err)
      }
    }    
    postRecipe()
  } 

  const handleChange = (e, index) => {
    e.preventDefault();
    const obj = {...ingredientsObj}
    obj[index] = {
      ingredient: e.target.value,
    };
    setIngredientsObj(obj);
  }

  

  const numOfIngredients = [];
  for (let i = 1 ; i <= ingredients; i++){
    numOfIngredients.push(
      <div className="input-group mb-3" key={i}>
      <input type="text" name={`answer${i}`} className="form-control border border-primary" placeholder={`Ingredient ${i}`} onChange={(e) => handleChange(e, i)} required/>
        <button type="button" onClick={() => setIngredients(ingredients - 1)} className="input-group-text btn btn-outline-primary" >X</button>
        <div className="input-group mb-3">
                Amount:   <input type="text" onChange={e=> setAmount(e.target.value)} className="form-control" placeholder=""/>
        </div>
      </div>
    )
  }


  return (
    <div className="mb-4  ms-4">
        <form action="" onSubmit={handleSubmit}>
            <div className="form-row row mb-3">
                <div className="input-group mb-3">
                   Recipe Name:  <input type="text" value={recipe} onChange={e=> setRecipe(e.target.value)} className="form-control" placeholder=""/>
                </div> 
                <div className="input-group mb-3">
                Description:  <input type="text" value={description} onChange={e=> setDescription(e.target.value)} className="form-control" placeholder=""/>
                </div>
                <div className="input-group mb-3">
                Preparation Time:   <input type="text" value={preparation_time} onChange={e=> setPreparation_time(e.target.value)} className="form-control" placeholder=""/>
                </div>
                <div className="input-group mb-3">

                Cook Time:   <input type="text" value={cook_time} onChange={e=> setCook_time(e.target.value)} className="form-control" placeholder=""/>
                </div>
                <div className="input-group mb-3">
                Serving Size:   <input type="text" value={serving_size} onChange={e=> setServing_size(e.target.value)} className="form-control" placeholder=""/>
                </div>
                Ingredients:  
                {numOfIngredients}
                <button className="btn btn-outline-primary" type="button" onClick={() => setIngredients(ingredients + 1)}>Add Option</button>
                <hr className="border border-primary" />

                <button type="submit" className="btn
                 ">Submit</button>
            </div>
        </form>
  </div>
  )
}

export default AddRecipe
