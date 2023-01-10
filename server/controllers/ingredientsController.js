const ingredientsController = {}

ingredientsController.addIngredient = (req, res, next) => {
    const createQuery = `INSERT INTO ingredients (
        name,
        amount) VALUES ($1, $2)`;
    const { name, amount } = req.body;
    db.query(createQuery, ([name, amount])
    .then((data) => {
        return next();
    })
    .catch((err) => {
        console.log(`an err has occured: ${err}`)
    })
)}

ingredientsController.deleteIngredient = (req, res, next) => {
    
}