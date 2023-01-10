const express = require('express');
const router = express.Router();

const middleware = 'placeholder';

/* retrieves user recipe */
router.get('/getAll', (req, res) => {
    return res.status(200)
})

/* creates/adds new recipe */
router.post('/addRecipe', (req, res) => {
    return res.status(200)
})

/* updates recipe */
router.put('/updateRecipe', (req, res) => {
    return res.status(200)
})

/* delete recipe */
router.delete('/deleteRecipe', (req, res) => {
    return res.status(200)
})

module.exports = router;