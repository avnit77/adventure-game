// build a simple JS user out of the weird formdata object
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('player'),
        health: 100,
        fear: 50,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    race: formData.get('player'),
    health: 100,
    fear: 50,
    completed: {}
});

export default makeUser;