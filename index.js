require('dotenv').config()
const express = require('express');
const db = require('./config/DatabaseConnection');
const authRouter = require('./routes/auth/authRoutes');
const userRoute = require('./routes/userRouter');
const app = express();
app.use(express.json())
app.use(('/api/auth'), authRouter)
app.use(('/api/auth'), userRoute)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
    db();
});