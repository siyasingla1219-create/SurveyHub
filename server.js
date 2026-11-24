const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request Method:", req.method,);
    next();
});
// Test route
app.get("/", (req, res) => {
    res.send("SurveyHub Backend is Running!");
});

// Start server
const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
