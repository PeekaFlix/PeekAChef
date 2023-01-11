const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController.js');

/* retrieves user recipe */
router.get('/getAll', recipesController.getAllRecipes, (req, res) => {
    return res.status(200).send('yay')
})

/* creates/adds new recipe */
router.post('/addRecipe', recipesController.addRecipe, (req, res) => {
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