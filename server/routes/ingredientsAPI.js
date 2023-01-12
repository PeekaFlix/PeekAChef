const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController.js')

/* retrieves ingredients */
router.post('/getIngredients', ingredientsController.getIngredients, (req, res) => {
    return res.status(200).json(res.locals.ingredients)
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
router.delete('/deleteIngredient', (req, res) => {
    return res.status(200)
})

module.exports = router;