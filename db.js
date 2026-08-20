const sql = require("mssql");

const config = {
    user: "sa",
    password: "arya1386",
    server: "localhost",
    database: "todo_app",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log("connect to DB successfully!");
    } catch (error) {
        console.error("error connecting to DB!", error);
        process.exit(1);
    }
};

module.exports = { connectDB, sql };