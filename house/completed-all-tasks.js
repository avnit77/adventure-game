function completedAllTasks(tasks, user) {
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (!user.completed[task.id]) {
            return false;
        }
    }

    return true;
}

export default completedAllTasks;