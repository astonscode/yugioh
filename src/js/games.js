function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function jankenpon() {
    loop = true

    while (loop == true) {
        x = prompt("Choose one. (Rock, Paper, Scissors)")
        
        y = randomRandom(1, 3)

        if (y == 1) {
            y = "rock"
        } else if (y == 2) {
            y = "paper"
        } else if (y == 3) {
            y = "scissors"
        }

        x = x.toLowerCase()
        
        if (x == "rock" && y == "paper" || x == "paper" && y == "scissors" || x == "scissors" && y == "rock") {
            alert(`You lost!`)
            loop = false
        } else if (x == "rock" && y == "scissors" || x == "scissors" && y == "paper" || x == "paper" && y == "rock") {
            alert(`You won!`)
            loop = false
        } else {
            alert(`Draw. Go again.`)
            loop = true
        }
    }
}

function coin(int) {
    let outcome = 0
    if (int != undefined || isNaN(int) == false) {
        let n_arr = []
        for (let i = 0; i < int; i ++) {
            let n = random(1, 100)
            if (n > 50) {
                outcome = "heads"
            } else {
                outcome = "tails"
            }
            n_arr.push(outcome)
            console.log(outcome)
        }
        return n_arr
    } else {
        let n = random(1, 100)
        if (n > 50) {
            outcome = "heads"
        } else {
            outcome = "tails"
        }
        return outcome
    }
}

function roll(int) {
    let outcome
    if (int != undefined) {
        for (i = 0; i <= int; i++) {
            outcome = random(1, 6)
        }
    } else {
        outcome = random(1, 6)
    }
    
    return outcome
}