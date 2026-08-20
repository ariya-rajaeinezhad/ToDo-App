import { fetchTasks, createTask, deleteAllTasks } from './api.js';
import { renderTasks, clearInputs } from './ui.js';

let currentView = "add";

async function init() {
    console.log("🚀 App initialized");
    await loadAndRenderTasks();
    setupEventListeners();
}

async function loadAndRenderTasks() {
    console.log("🔹 Loading tasks...");
    const tasks = await fetchTasks();
    renderTasks(tasks, currentView);
}

function setupEventListeners() {
    document.querySelector("#task-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const title = document.querySelector(".input-task").value;
        const date = document.querySelector(".date-task").value;

        console.log(`the user type ${title}`);

        await createTask(title, date);
        clearInputs();
        await loadAndRenderTasks();
    });

    document.querySelector(".refresh").addEventListener("click", async function () {
        console.log("user refresh for deleting all data and tasks created!");

        const success = await deleteAllTasks();

        if (success) {
            console.log("All tasks cleared from server!");
            await loadAndRenderTasks();
        } else {
            console.error("Failed to delete tasks");
        }
    });

    const sideBar = document.querySelectorAll(".div-aside");
    sideBar.forEach((sideBarItem) => {
        sideBarItem.addEventListener("click", function () {
            sideBar.forEach((item) => item.classList.remove("active"));
            sideBarItem.classList.add("active");

            currentView = sideBarItem.dataset.view;
            console.log("View changed to:", currentView);

            loadAndRenderTasks();
        });
    });

    document.addEventListener('taskCompleted', async function () {
        console.log("🔹 Task completed, refreshing...");
        await loadAndRenderTasks();
    });
}

document.addEventListener('DOMContentLoaded', init);