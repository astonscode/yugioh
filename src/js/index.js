import { cardDatabase } from "./database/database"

const linkArray = [{
    path: "Card.js", 
    isModule: false,
}, {
    path: "Field.js", 
    isModule: false,
}, {
    path: "console.js", 
    isModule: false,
}, {
    path: "Logic.js", 
    isModule: false,
}, {
    path: "games.js", 
    isModule: false,
}, {
    path: "actions.js", 
    isModule: false,
}, {
    path: "animations.js", 
    isModule: false,
}, {
    path: "dev.js", 
    isModule: false,
}, {
    path: "database/database.js", 
    isModule: true,
}, {
    path: "database/players.js", 
    isModule: false,
}, {
    path: "scraper.js", 
    isModule: true,
}]

function generate(link, isModule) {
    const x = document.createElement("script")
    x.src = `/src/js/${link}`
    x.setAttribute("defer", "true")
    if (isModule == true) {
        x.setAttribute("type", "module")
    } else {
        document.head.appendChild(x)
    }

    document.head.appendChild(x)
    return x 
}

const cards = [0, 12, 13, 14, 6, 9, 15]

function createCardInHand(id) {
    let hand = document.getElementById("playerHand")
    let x = document.createElement("div")
    x.id = "card"
    x.classList.add("flex-column")

    const detectColor = () => {
        if (cardDatabase[id].type == 0) { // Normal
            return "#f0c956"
        } else if (cardDatabase[id].type == 1) { // Effect
            return "#b06f20"
        } else if (cardDatabase[id].type == 2) { // Token
            return "#858177"
        } else if (cardDatabase[id].type == 3) { // Ritual
            return "#265e8c"
        } else if (cardDatabase[id].type == 4) { // Fusion
            return "#803e9e"
        } else if (cardDatabase[id].type == 5) { // Synchro
            return "#dbdbdb"
        } else if (cardDatabase[id].type == 6) { // XYZ
            return "#000"
        } else if (cardDatabase[id].type == 7) { // Pendulum
            return "#56766c"
        } else if (cardDatabase[id].type == 8) { // Link
            return "#346eeb"
        } else if (cardDatabase[id].type == 100) { // Slifer
            return "#cc1b1b"
        } else if (cardDatabase[id].type == 101) { // Obelisk
            return "#0058cc"
        } else if (cardDatabase[id].type == 102) { // Ra
            return "#c59422"
        }

        x.style.borderBottom = `5px solid ${detectColor()}`
        let y = document.createElement("div")
        y.id = "cardName"
        y.innerHTML = `[${cardDatabase[id].level}] ${cardDatabase[id].name}`
        let z = document.createElement("div")
        z.id = "cardImgHolder"
        let img = document.createElement("img")
        img.src = cardDatabase[id].src
        img.id = "cardImg"

        z.append(img)
        x.append(y, z)
        hand.append(x)
    }
}

document.addEventListener("DOMContentLoaded", ()=>{ 
    // for (var i = 0; i < linkArray.length; i++) {
    //   generate(linkArray[i].path, linkArray[i].isModule)
    // }

    generate("database/database.js", true)

    console.log(cardDatabase)

    setTimeout(()=>{
        for (var i = 0; i < cards.length; i++) {
            createCardInHand(cards[i])
        }
    }, 500)
})
