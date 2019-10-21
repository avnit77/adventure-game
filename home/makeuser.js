function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        player: formData.get('player'),
        health: 100,
        sanity: 50,
        leave: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    player: formData.get('player'),
    health: 100,
    sanity: 50,
    leave: 0,
    completed: {}
});

export default makeUser;