const possessed = {
    id: 'possessed',
    title: 'Weird Kid',
    house: {
        top: '89%',
        left: '44%'
    },
    image: 'possessed.jpg',
    //audio: 'monsters.wav',
    //action: 'monster-scream.wav',
    description: `
        Woah! You rounded a corner and almost ran right into an unblinking child facing you stiffly in the hallway.
        Sure does like to stare silently. And their eyes are jet black. Is that a puberty thing? They're probably fine, right?
    `,
    choices: [{
        id: 'rescue',
        description: 'Try to save them! You can\'t leave a little kid to their doom in this nightmare house!',
        result: `
            'Snap out of it!' You yell productively at the unresponsive child. 'We gotta go! 
            Don't you know this is a nightmare house? When the child, who is suddenly way closer than you
            remember them being, whispers, 'I will tear you open and feast on your entrails' you are finally
            able to see all the blood on their teeth. You turn to run, but your right arm stays with 
            the weird kid. 'Mommy gets mad if I don't clean my plate,' laughs the child as you run away. 

        `,
        health: -30,
        sanity: -10,
        leave: 1
    }, {
        id: 'kill',
        description: 'Kill it! Kill it now! Nightmare house! Kill it!',
        result: `
            Absolutely not, nightmare child! You grab the closest peice of furniture, a Lerhmamn dining chair 
            from IKEA and throw it at the child with such unrealistic force that the chair pushes the child 
            right through the window behind it. Staring at the window as it magically reseals itself, you breifly
            entertain the possibility that that was just a regular kid that you smashed through a window. 

        `,
        health: 0,
        sanity: -30,
        leave: 1
    }, {
        id: 'nope',
        description: 'Nope!',
        result: `
            "It's gonna be a 'no' from me, nightmare child," you say as you go find a different direction to try. 
        `,
        health: 0,
        sanity: 0,
        leave: 0
    }]
};

const prize = {
    id: 'prize',
    title: 'Trophy Room',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'prize.jpg',
   // audio: 'dragon.wav',
   // action: 'dragon-growl.aiff',
    description: `
        You open a door and are delighted to find exactly what you want more than anything else in the world! Sweet!
        Obviously you're still going to leave the nightmare house, but maybe you should just run into the room
        and grab your hearts deepest desire on the way? I mean, it's right there!
    `,
    choices: [{
        id: 'nope',
        description: 'Nope',
        result: `
            There is only one thing you want right now and that is to get tf out of here! You slam the door on 
            the riches/loved ones/rent controlled apartment and keep looking for a way out.
        `,
        health: 0,
        sanity: 0,
        leave: 0
    }, {
        id: 'sneak',
        description: 'Make sure the coast is clear and sneak carefully into the room. You\'ll be in and out before anyone notices.',          
        result: `
            When will you and Indiana Jones learn? Cursed, booby-trapped rooms full of treasure are EXPECTING this kinda
            tomfoolery. The door slams shut behind you and the ghost of a wealthy victorian woman emerges from the floor and starts screaming a LOT.
            Like, a LOT. Super loud! It feels like it's going to rip your head in two. Actually, it might be ripping your head in two. Somehow,
            you bash your way back through the door, but using your own body as a battering ram takes a lot out of a person.
        `,
        health: -60,
        sanity: -5,
        leave: 1
    }, {
        id: 'arrogant',
        description: 'Just take it! It\'s right there and it\'s everything you ever wanted. There\'s no downside to this!',
        result: `
            Hey baby, are you a cis white man, cause it seems that society never taught you that not everything is for you and 
            there are consequences for your actions! Anyway, as soon as you get your hands on your prize it turns into the thing 
            fear most in the world. You turn to run, but the door has disappeared. You don't know how long you're trapped in there 
            (minutes? hours? years?) before the door reappears and you can finally escape. 
        `,
        health: 0,
        sanity: -40,
        leave: 1
    }]
};



const tasks = [possessed, prize];


export default tasks;