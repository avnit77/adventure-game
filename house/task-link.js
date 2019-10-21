function taskLink(task) {
    const link = document.createElement('a');
    link.classList.add('task');

    link.href = '../task/?id=' + task.id;

    link.style.top = task.house.top;
    link.style.left = task.house.left;
    link.textContent = task.title;

    return link;
}

export default taskLink;