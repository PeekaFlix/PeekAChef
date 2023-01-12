const express = require('express');
const Router = express.Router();
const usersController = require('../controllers/userController.js');
const recipesController = require('../controllers/recipesController.js');

/* retrieves users recipe */
Router.get('/readUsers', (req, res) => {
    return res.status(200)
})

/* create an account */
Router.post('/createUser', usersController.createUser, (req, res) => {
    return res.status(200).send('success')
})

/* login into an account || also grabs user recipe list */
Router.post('/login', usersController.checkLogin, recipesController.getAllRecipes, (req, res) => {
    return res.status(200).send(res.locals.recipes)
})

module.exports = Router;