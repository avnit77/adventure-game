import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {

    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const health = document.getElementById('health');
    const sanity = document.getElementById('sanity');

    const user = getUser();

    if (!user) {

        window.location = './';
    }
    name.textContent = user.name;
    avatar.src = '../assets/' + user.player + '.png';
    sanity.textContent = user.sanity;

    if (isDead(user)) {
        health.textContent = 'deceased';
    }
    else {
        health.textContent = user.health;
    }

}

export default loadProfile;