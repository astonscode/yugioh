function rollRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function jankenpon() {
    loop = true

    while (loop == true) {
        x = prompt("ROCK PAPER SCISSORS !!!")
        
        y = rollRandom(1, 3)

        if (y == 1) {
            y = "rock"
        } else if (y == 2) {
            y = "paper"
        } else if (y == 3) {
            y = "scissors"
        } else {
            console.log(`what the fuck is wrong with you`)
        }

        console.log(x, y)
        
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

function roll(sides0, sides) {
    return rollRandom(sides0, sides)
}