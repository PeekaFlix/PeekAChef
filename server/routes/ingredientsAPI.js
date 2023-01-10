const express = require('express');
const router = express.Router();

const middleware = 'placeholder';

/* retrieves ingredients */
router.get('/getIngredients', (req, res) => {
    return res.status(200)
})

/* creates/adds new ingredients */
router.post('/addIngredients', (req, res) => {
    return res.status(200)
})

/* updates ingredients */
router.put('/updateIngredients', (req, res) => {
    return res.status(200)
})

/* delete ingredient */
router.delete('/deleteRecipe', (req, res) => {
    return res.status(200)
})

module.exports = router;