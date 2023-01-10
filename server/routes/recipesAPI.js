const express = require('express');
const router = express.Router();

const middleware = 'placeholder';

/* retrieves user recipe */
router.get('/getAll', middleware, (req, res) => {
    return res.status(200)
})

/* creates/adds new recipe */
router.post('/addRecipe', middleware, (req, res) => {
    return res.status(200)
})

/* updates recipe */
router.put('/updateRecipe', middleware, (req, res) => {
    return res.status(200)
})

/* delete recipe */
router.delete('/deleteRecipe', middleware, (req, res) => {
    return res.status(200)
})