const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

/* imports ingredients/recipes/users routers) */
const recipeRouter = require('./routes/recipesAPI.js');
const ingredientsRouter = require('./routes/ingredientsAPI.js');
const usersRouter = require('./routes/usersAPI.js');

/* allows to parse incoming JSON requests */
app.use(express.json());
/* allows to parse through incoming URL encoded requests */
app.use(express.urlencoded({ extended: true }));
/* allows accepting cross-origin requests */
app.use(cors());

/* server is running and listening to specific PORT */
app.listen(PORT, () => {console.log(`listening on port ${PORT}...`)})

/* recipes router */
app.use('/recipes', recipeRouter)

/* ingredients router */
app.use('/ingredients', ingredientsRouter)

/* user router */
app.use('/users', userRouter)

/* global err handler */
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'express error handler caught global err handler',
        status: 500,
        message: {err: 'an error occured'}
    }
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;