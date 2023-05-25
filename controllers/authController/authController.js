require('dotenv').config()
const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
exports.singup = async (req, res, next) => {
    const { name, username, email, password, profile } = req.body;
    try {
        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(password, salt);
        const user = await User.create({ name, username, email, password: hash, profile });
        return res.status(201).json({ message: `Hello ${name} ! Your Account has been created`, user })
    } catch (err) {
        res.status(404).json({
            message: "Something went wrong"
        })
    }
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(404).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ username, id: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" })
        res.status(200).json({ message: "Login successful", token })
    } catch (error) {
        res.status(404).json({
            message: "Something went wrong"
        })
    }
}