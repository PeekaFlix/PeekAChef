const recipesController = {}

ingredientsController.getAllRecipes = (req, res, next) => {

}

ingredientsController.addRecipe = (req, res, next) => {
    const createQuery = `INSERT INTO recipes (
        recipe,
        description,
        preparation_time,
        cook_time,
        serving_size) VALUES VALUES ($1, $2, $3, $4, $5)`;
    const { recipe, description, preparation_time, cook_time, serving_size } = req.body;
    db.query(createQuery, ([recipe, description, preparation_time, cook_time, serving_size])
    .then((data) => {
        return next();
    })
    .catch((err) => {
        console.log(`an err has occured: ${err}`)
    })
)}

ingredientsController.updateRecipe = (req, res, next) => {

}

ingredientsController.deleteRecipe = (req, res, next) => {
    
}