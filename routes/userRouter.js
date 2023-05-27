const { getAllUser } = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/auth');

const userRoute = require('express').Router();
userRoute.get('/getAllUser',authMiddlewares, getAllUser )
module.exports = userRoute;