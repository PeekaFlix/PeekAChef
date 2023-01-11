const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController.js')

/* retrieves ingredients */
router.get('/getIngredients', (req, res) => {
    return res.status(200)
})

/* creates/adds new ingredients */
router.post('/addIngredients', ingredientsController.addIngredient, (req, res) => {
    return res.status(200).send('addedIngredient')
})

/* updates ingredients */
// router.put('/updateIngredients', (req, res) => {
//     return res.status(200)
// })

/* delete ingredient */
router.delete('/deleteRecipe', (req, res) => {
    return res.status(200)
})

module.exports = router;