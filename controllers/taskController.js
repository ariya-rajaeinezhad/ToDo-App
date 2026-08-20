const { sql } = require("../db")

exports.getAllTasks = async (req, res) => {
    try {
        const result = await sql.query("select * from tasks");
        const tasks = result.recordset;
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "failed to fetch tasks!" })
    }
};

exports.createTask = async (req, res) => {
    try {
        const { title, date } = req.body;
        const taskDate = (!date || date === "") ? null : date;

        let result;

        if (taskDate === null) {
            result = await sql.query(`
                INSERT INTO tasks (title, completed, date)
                OUTPUT INSERTED.*
                VALUES (N'${title}', 0, NULL)
            `);
        } else {
            result = await sql.query(`
                INSERT INTO tasks (title, completed, date)
                OUTPUT INSERTED.*
                VALUES (N'${title}', 0, N'${taskDate}')
            `);
        }

        const newTask = result.recordset[0];
        res.status(201).json(newTask);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create task" });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const idTask = req.params.id;
        const updates = req.body;
        const completedValue = updates.completed ? 1 : 0;

        const result = await sql.query(`
            UPDATE tasks
            SET completed = ${completedValue}
            OUTPUT INSERTED.*
            WHERE id = ${idTask}
        `);

        const updatedTask = result.recordset[0];
        res.json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update task" });
    }
};
exports.deleteAllTasks = async (req, res) => {
    try {
        await sql.query(`delete from tasks`)
        res.json({ message: "All tasks deleted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete all tasks" });
    }
};