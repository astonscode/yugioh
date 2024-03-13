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
    path: "Game.js", 
    isModule: false,
},{
    path: "actions.js", 
    isModule: false,
}, {
    path: "animations.js", 
    isModule: false,
}, {
    path: "dev.js", 
    isModule: false,
}, {
    path: "database/players.js", 
    isModule: false,
}, {
    path: "checking.js", 
    isModule: false,
}, {
    path: "fetch.js", 
    isModule: false,
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

function detectColor(card) {
    let x = card.frameType || card.id
    switch (x) {
        case "normal":
            return "#f0c956"
        case "effect":
            return "#b06f20"
        case "token":
            return "#858177"
        case "ritual":
            return "#265e8c"
        case "fusion":
            return "#803e9e"
        case "synchro":
            return "#dbdbdb"
        case "xyz":
            return "#000000"
        case "pendulum":
            return "#56766c"
        case "link":
            return "#346eeb"
        case "spell":
            return "#3c9f91"
        case "trap":
            return "#9f3c93"
        case 10000000:
            return "#0058cc"
        case 10000010:
            return "#c59422"
        case 10000020:
            return "#cc1b1b"
    }
}

async function cardAsker(name, artwork) {
    let hand = document.getElementById("cards")

    const card = await fetchCard(name)
    let x = document.createElement("div")
    x.id = "card"
    x.classList.add("flex-column")
    x.style.borderBottom = `5px solid ${detectColor(card)}`
    let a = uuid(8)
    x.setAttribute("name", a)

    let y = document.createElement("div")
    y.id = "cardName"
    
    if (card.level != undefined) {
        y.innerHTML = `[${card.level}] ${card.name}`
    } else if (card.level == undefined && card.linkval != undefined) {
        y.innerHTML = `<span style="display: inline;color: #346eeb"> [${card.linkval}] </span> ${card.name}`
    } else {
        y.innerHTML = card.name
    }

    let img = document.createElement("img")
    img.id = "cardImg"

    if (artwork != undefined) {
        img.src = card.card_images[artwork].image_url_cropped
    } else {
        img.src = card.card_images[0].image_url_cropped
    }

    let z = document.createElement("div")
    z.id = "cardImgHolder"

    z.append(img)
    x.append(y, z)
    hand.append(x)

    console.log(a, card.name)
}

document.addEventListener("DOMContentLoaded", ()=>{ 
    for (let i = 0; i < linkArray.length; i++) {
       generate(linkArray[i].path, linkArray[i].isModule)
    }

    setTimeout(async ()=>{
        users[0].active.deck = users[0].decks[0].deck
        shuffle(0)
        draw(0, 5)
    }, 1000)
})

