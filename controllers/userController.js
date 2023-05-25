const User = require("../models/userModel");

exports.getAllUser = async (req, res, next) => {
    try {
        const users = await User.find({}, 'username name email -_id');
        return res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
};
