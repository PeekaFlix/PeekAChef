const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController.js');
const ingredientsController = require('../controllers/ingredientsController.js');

/* retrieves user recipe */
router.get('/getAll', recipesController.getAllRecipes, (req, res) => {
    return res.status(200).json(res.locals.recipes)
})

/* creates/adds new recipe */
router.post('/addRecipe', recipesController.addRecipe, ingredientsController.addIngredient, (req, res) => {
    return res.status(200).send('successful')
})

/* updates recipe */
// router.put('/updateRecipe', (req, res) => {
//     return res.status(200)
// })

/* delete recipe */
router.delete('/deleteRecipe', (req, res) => {
    return res.status(200)
})

module.exports = router;