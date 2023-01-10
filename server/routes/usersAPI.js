const express = require('express');
const router = express.Router();

const middleware = 'placeholder';

/* retrieves users recipe */
router.get('/readUsers', (req, res) => {
    return res.status(200)
})

/* create an account */
router.post('/signup', (req, res) => {
    return res.status(200)
})

/* update a user */
router.put('/updateUser', (req, res) => {
    return res.status(200)
})

/* delete a user */
router.delete('/deleteUser', (req, res) => {
    return res.status(200)
})

module.exports = router;