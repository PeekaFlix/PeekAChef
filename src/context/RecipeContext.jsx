import React, {useState, createContext} from 'react';

export const RecipeContext = createContext();

export const RecipeContextProvider = props => {
    const [recipes, setRecipes] = useState([]);
    const [username, setUsername] = useState([]);
    const addRecipes = (recipe) => {
        setRecipes([...recipes, recipe]);
    }
    return (
        <RecipeContext.Provider value={{
            recipes, setRecipes, 
            addRecipes, 
            username, setUsername
        }}>
            {props.children}
        </RecipeContext.Provider>
    )
}