const API_URL = "http://localhost:3000/tasks";

export async function fetchTasks() {
    const response = await fetch(API_URL);
    return await response.json();
}

export async function createTask(title, date) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date })
    });
    return await response.json();
}

export async function completeTask(taskId) {
    const response = await fetch(`${API_URL}/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: true })
    });
    return response.ok;
}

export async function deleteAllTasks() {
    const response = await fetch(API_URL, {
        method: "DELETE"
    });
    return response.ok;
}