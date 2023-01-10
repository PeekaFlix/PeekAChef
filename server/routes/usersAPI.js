const express = require('express');
const router = express.Router();

const middleware = 'placeholder';

/* retrieves users recipe */
router.get('/readUsers', middleware, (req, res) => {
    return res.status(200)
})

/* create an account */
router.post('/signup', middleware, (req, res) => {
    return res.status(200)
})

/* update a user */
router.put('/updateUser', middleware, (req, res) => {
    return res.status(200)
})

/* delete a user */
router.delete('/deleteUser', middleware, (req, res) => {
    return res.status(200)
})