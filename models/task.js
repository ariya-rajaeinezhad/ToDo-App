const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    completed: {
        default: false
    },
    date: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;