const { singup, login } = require('../../controllers/authController/authController');
const authRouter = require('express').Router();
authRouter.post('/singup', singup)
authRouter.post('/login', login)
module.exports = authRouter;