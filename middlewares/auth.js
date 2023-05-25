require('dotenv').config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    
    if (!token) {
      return res.status(404).json({ message: "Invalid Token" });
    }
    token = token.split(" ")[1]; // Assign the split token back to the variable
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    const id = decode.id;
    const user = await User.findById(id);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication Failed!" });
  }
};
