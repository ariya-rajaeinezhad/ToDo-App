export function renderTasks(tasks, filter = "add") {
    const listContainer = document.querySelector(".list-container");
    const today = new Date().toISOString().split('T')[0];
    let filterTask = tasks;
    let counter = 1;

    if (filter === "today") {
        filterTask = tasks.filter(task => task.date === today);
    } else if (filter === "upcoming") {
        filterTask = tasks.filter(task => task.date > today);
    } else if (filter === "completed") {
        filterTask = tasks.filter(task => task.completed === true);
    }

    console.log("🔹 Filtered tasks count:", filterTask.length);

    listContainer.innerHTML = "";

    filterTask.forEach((task) => {
        const taskElement = createTaskElement(task, counter);
        listContainer.appendChild(taskElement);
        counter += 1;
    });
}

function createTaskElement(task, counter) {
    const taskList = document.createElement("div");
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const dateList = document.createElement("span");

    listItem.textContent = `${counter}. ${task.title}`;
    dateList.textContent = task.date ? task.date.substring(0, 10) : "----/--/--";
    deleteBtn.textContent = "Complete!";

    taskList.classList.add("task-list");
    dateList.classList.add("date");

    if (task.completed === true) {
        taskList.classList.add("complete");
        deleteBtn.textContent = "Completed ✓";
        deleteBtn.disabled = true;
    }

    taskList.appendChild(listItem);
    taskList.appendChild(dateList);
    taskList.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", async function () {
        console.log("user clicked complete button!");

        const { completeTask } = await import('./api.js');
        const success = await completeTask(task.id);

        if (success) {
            console.log(`${task.id} completed!`);
            document.dispatchEvent(new CustomEvent('taskCompleted'));
        } else {
            console.error("Failed to complete task!");
        }
    });

    return taskList;
}

export function clearInputs() {
    document.querySelector(".input-task").value = "";
    document.querySelector(".date-task").value = "";
}