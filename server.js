"use strict";

const express = require("express");
const cors = require('cors');
const { connectDB } = require("./db");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});