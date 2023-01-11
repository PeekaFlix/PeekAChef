const db = require('../pg.js');
const usersController = {};

usersController.createUser = (req, res, next) => {
    console.log(req.body);
    const createQuery = `INSERT INTO users (
        username,
        password
    ) VALUES ($1, $2)`;
    const { username, password } = req.body;
    db.query(createQuery, [username, password])
    .then((data) => {
        console.log(req.body)
        return next();
    })
    .catch((err) => {
        console.log(`An err has occured in usersController createUser middleware: ${err}`)
    })
};

usersController.checkLogin = (req, res, next) => {
    const { username, password } = req.body;
    const findUser = `SELECT * FROM users WHERE username=$1 AND password=$2`;
  
    db.query(findUser, [username, password])
    .then((data) => {
        if (data.rows[0]) {
            res.locals.userID = data.rows[0]._id
            return next();
        }
        else return next('error')
    })
    .catch((err) => {
        console.log(`An err has occured in usersController checkLogin middleware : ${err}`)
    })
}

module.exports = usersController;