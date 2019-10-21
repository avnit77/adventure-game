function scoreTask(choice, taskId, user) {
    user.health += choice.health;
    user.sanity += choice.sanity;
    user.leave += choice.leave;
    user.completed[taskId] = true;
}

export default scoreTask;