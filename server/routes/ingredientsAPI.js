const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');
const middleware = 'placeholder';

/* retrpostes ingredients */
router.get('/getIngredients', ingredientsController.getIngredients, (req, res) => {
    return res.status(200).json(res.locals.ingredients)
})

/* creates/adds new ingredients */
router.post('/addIngredients', middleware, (req, res) => {
    return res.status(200)
})

/* updates ingredients */
router.put('/updateIngredients', middleware, (req, res) => {
    return res.status(200)
})

/* delete ingredient */
router.delete('/deleteRecipe', middleware, (req, res) => {
    return res.status(200)
})