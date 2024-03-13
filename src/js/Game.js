const game = {
    initialized: false, 
    phase: 0, // this is 0 out of possible 7 (Pre, Draw, Standby, Main 1, Battle (steps are in separate variable, Main 2, End, Post)
    step: 0, // for things that need steps (battle phase, effect activation, etc.)
    elapsedTime: 0
}

while (game.initialized) {
    game.phase = 0

    // Pre-Game (Coin Flip)

    let dice = false

    while (dice = false) {
        let turnDecision = 0
        const playerOneRoll = roll()
        const playerTwoRoll = roll()

        if (playerOneRoll > playerTwoRoll) {
            turnDecision = 0
            resolve(dice)
        } else if (playerOneRoll < playerTwoRoll) {
            turnDecision = 1
            resolve(dice)
        } else {
            dice = false
        }
    }
}



function resolve(x) {
    switch (typeof x) {
        case "string":
            x = ""
        case "number":
            x = 1
        case "boolean":
            x = true
    }
}

function setLifePoints(lp) {
    let lpHTML = document.getElementById("playerOneLP")
    let targetValue = Number(lpHTML.textContent) + lp

    lpHTML.textContent = targetValue
}