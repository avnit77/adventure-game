import { saveUser } from '../data/api.js';
import makeUser from './makeuser.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(userSignUp);

    const user = makeUser(formData);

    saveUser(user);

    window.location = 'house';
});