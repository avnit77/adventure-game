import loadProfile from '../common/load-profile.js';
import { getUser, saveUser } from '../data/api.js';
import tasks from '../data/tasks.js';
import createChoice from './create-choice.js';
import findById from '../common/find-by-id.js';
import scoreTask from './score-task.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const taskId = searchParams.get('id');
const task = findById(tasks, taskId);

 
if (!task) {
    window.location = '../house';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = task.title;
image.src = '../assets/' + task.image;
description.textContent = task.description;

for (let index = 0; index < task.choices.length; index++) {
    const choice = task.choices[index];
    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(task.choices, choiceId);

    const user = getUser();

    scoreTask(choice, task.id, user);
    saveUser(user);

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    loadProfile();
});