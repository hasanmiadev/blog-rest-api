const User = require("../models/userModel")

exports.getAllUser = async (req, res, next) => {
    const user = await User.find();
    try {
        return res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: "Something went wrong"})
    }
}