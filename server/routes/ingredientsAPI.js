const express = require('express');
const router = express.Router();

const middleware = 'placeholder';

/* retrieves ingredients */
router.get('/getIngredients', middleware, (req, res) => {
    return res.status(200)
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