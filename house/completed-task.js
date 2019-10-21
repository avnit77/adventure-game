function completedTask(task) {
    const span = document.createElement('span');
    span.classList.add('task');
    span.classList.add('completed');

    span.style.top = task.house.top;
    span.style.left = task.house.left;

    span.textContent = task.title;
    return span;
}

export default completedTask;