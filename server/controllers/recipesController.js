const db = require('../pg.js');
const recipesController = {}

recipesController.getAllRecipes = (req, res, next) => {
    const { recipe, description, preparation_time, cook_time, serving_size } = req.body;
    const getRecipes = `SELECT * FROM recipes WHERE users_id=$1`;
    db.query(getRecipes, [res.locals.userID])
    .then((data) => {
        console.log(data.rows)
        //store recipe
        res.locals.recipes = data.rows;
        return next();
    })
    .catch((err) => {
        console.log(`An err has occured in recipesController.getAllRecipes middleware : ${err}`)
    })
}

recipesController.addRecipe = (req, res, next) => {
    const createQuery = `INSERT INTO recipes (
        user_id,
        recipe,
        description,
        preparation_time,
        cook_time,
        serving_size) VALUES ($1, $2, $3, $4, $5, $6)`;
    const { users_id, recipe, description, preparation_time, cook_time, serving_size } = req.body;
    db.query(createQuery, ([users_id, recipe, description, preparation_time, cook_time, serving_size]))
    .then((data) => {
        return next();
    })
    .catch((err) => {
        console.log(`An err has occured in recipesController middleware: ${err}`)
    })
}

recipesController.deleteRecipe = (req, res, next) => {

}

module.exports = recipesController;