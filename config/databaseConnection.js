const mongoose = require('mongoose');
require('dotenv').config()

const databaseConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log(`Database Connected Successfully`);
    } catch (error) {
        console.log("Database connection Failed", error);
    }
}

module.exports = databaseConnect