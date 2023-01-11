const db = require('../pg.js');
const ingredientsController = {}

ingredientsController.getIngredients = (req, res, next) => {
        const { recipe_id } = req.body;
        const getIngredients = `SELECT * FROM ingredients WHERE recipe_id = $1`;
        db.query(getIngredients, [recipe_id])
        .then((data) => {
            console.log(data.rows)
            //store recipe
            res.locals.ingredients = data.rows;
            return next();
        })
        .catch((err) => {
            console.log(`An err has occured in ingredientsController.getIngredients middleware : ${err}`)
        })
    }

ingredientsController.addIngredient = (req, res, next) => {
    const createQuery = `INSERT INTO ingredients (
        recipe_id,
        name,
        amount) VALUES ($1, $2, $3)`;
    const { name, amount, recipe_id } = req.body;
    db.query(createQuery, [recipe_id, name, amount])
    .then((data) => {
        return next();
    })
    .catch((err) => {
        console.log(`An err has occured in ingredientsController.addIngredients middleware:${err}`)
    })
}

ingredientsController.deleteIngredient = (req, res, next) => {
    
}

module.exports = ingredientsController;