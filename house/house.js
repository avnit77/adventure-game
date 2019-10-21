import { getUser } from '../data/api.js';
import tasks from '../data/tasks.js';
import loadProfile from '../common/load-profile.js';
import taskLink from './task-link.js';
import completedTask from './completed-task.js';
import completedAllTasks from './completed-all-tasks.js';
import isDead from '../common/is-dead.js';

loadProfile(); 
const user = getUser();


if (isDead(user) || completedAllTasks(tasks, user)) {
    window.location = '../results';
}

const nav = document.getElementById('tasks');

for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    let taskDisplay = null;
    if (user.completed[task.id]) {
        taskDisplay = completedTask(task);
    }
    else {
        taskDisplay = taskLink(task);
    }
    nav.appendChild(taskDisplay); 
}