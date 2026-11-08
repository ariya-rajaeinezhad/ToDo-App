# 📝 Full-Stack To-Do List App

> *"A modern, responsive, and fully functional task management application demonstrating clean full-stack architecture."*

**Repository:** [github.com/ariya-rajaeinezhad/ToDo-App](https://github.com/ariya-rajaeinezhad/ToDo-App)

---

## 📖 About This Project

This repository contains the complete source code for a robust, full-stack To-Do List application. Designed to showcase end-to-end development capabilities, this project bridges a clean, intuitive Vanilla JavaScript frontend with a powerful Node.js/Express backend and a persistent Microsoft SQL Server database. 

Built with a strong focus on code organization, this application separates concerns into distinct controllers, routes, and database configurations, demonstrating a professional approach to scalable web development and reliable data management.

---

## ✨ Key Highlights

- ⚡ **Real-Time UI Updates**: Dynamic DOM manipulation using ES6 Modules and the Fetch API, ensuring seamless interactions without page reloads.
- 🗄️ **Persistent SQL Storage**: Robust backend integration with Microsoft SQL Server, guaranteeing data persistence and reliability.
- 🎯 **Smart Filtering**: Intuitive sidebar navigation to filter tasks by "All", "Today", "Upcoming", and "Completed" statuses.
- 🎨 **Modern & Responsive UI**: Custom-styled interface with smooth hover effects, clean typography, and Bootstrap Icons, optimized for all screen sizes.
- 🏗️ **Clean Architecture**: Strict separation of concerns with dedicated `controllers`, `routes`, and database configuration for maximum maintainability.
- 🛡️ **Error Handling**: Consistent `try/catch` blocks with standardized JSON error responses to prevent server crashes and provide clear debugging information.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Backend** | Node.js, Express.js |
| **Database** | Microsoft SQL Server (`mssql`) |
| **Frontend** | Vanilla JavaScript (ES6 Modules), HTML5, CSS3 |
| **Styling & Icons** | Custom CSS, Bootstrap Icons |
| **Development** | Nodemon (Dev), CORS |

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (Express or Developer edition)
- [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms) (Optional, for database management)

---

## 🚀 Installation & Setup

### 1. Clone the Repository
`git clone https://github.com/ariya-rajaeinezhad/ToDo-App.git`
`cd ToDo-App`

### 2. Install Dependencies
`npm install`

### 3. Database Setup
1. Open SQL Server Management Studio (SSMS) or your preferred SQL client.
2. Create a new database named `todo_app`:
   `CREATE DATABASE todo_app; USE todo_app;`
3. Create the `tasks` table:
   `CREATE TABLE tasks ( id INT IDENTITY(1,1) PRIMARY KEY, title NVARCHAR(255) NOT NULL, completed BIT DEFAULT 0, date DATE NULL, createdAt DATETIME DEFAULT GETDATE() );`

### 4. Configure Environment
Update the database credentials in `db.js` to match your local SQL Server setup. *(Note: For production, it is highly recommended to move these credentials to a `.env` file using the `dotenv` package).*

`const config = { user: "sa", password: "your_secure_password", server: "localhost", database: "todo_app", options: { encrypt: false, trustServerCertificate: true } };`

### 5. Run the Application
Start the development server:
`npm run dev`

The backend will run on `http://localhost:3000`. Open your browser and navigate to `http://localhost:3000` to view the frontend.

---

## 📂 Project Structure

- **`controllers/`** - Business logic for CRUD operations (`taskController.js`)
- **`public/js/`** - Frontend logic (`api.js`, `app.js`, `ui.js`)
- **`public/`** - Static assets (`index.html`, `style.css`)
- **`routes/`** - Express route definitions (`taskRoutes.js`)
- **`db.js`** - SQL Server connection configuration
- **`server.js`** - Express server entry point

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/tasks` | Fetch all tasks from the database. |
| `POST` | `/tasks` | Create a new task (expects `{ title, date }`). |
| `PUT` | `/tasks/:id` | Update a task's completion status. |
| `DELETE` | `/tasks` | Delete all tasks from the database (Bulk clear). |

---

## ⚠️ Security Note

> **Important**: The `db.js` file currently contains default SQL Server credentials. **Never** commit real passwords to version control. In a production environment, always use environment variables (e.g., `dotenv`) to manage sensitive configuration data securely.

---

## 📄 License

Copyright (c) 2026 **Ariya Rajaei Nezhad**. All rights reserved.  
No part of this project may be copied, reproduced, or distributed without permission from the author.

---

<div align="center">
  <sub>Built with passion, coded with purpose by <strong>Ariya Rajaei Nezhad</strong></sub>
</div>
