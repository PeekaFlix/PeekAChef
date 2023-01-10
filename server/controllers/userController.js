const db = 'require(userModel)...placeholder'
const usersController = {};

usersController.createUser = (req, res, next, err) => {
    const createQuery = `INSERT INTO users (
        username
        password
    ) VALUES VALUES ($1)`;
    const {
        username,
        password
    } = req.body;
    db.query(createQuery, ([username, password])
    .then((data) => {
        return next();
    })
    .catch((err) => {
        console.log(`an err has occured: ${err}`)
    })
)};

usersController.checkLogin = (req, res, next) => {

}

