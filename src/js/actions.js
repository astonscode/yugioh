let deck = [
    "Celtic Guardian",
    "Dark Magician",
    "Apple Magician Girl",
    "Celtic Guard of Noble Arms",
    "Clear Kuriboh",
    "Dark Magician Girl",
    "Gandora-X, the Dragon of Demolition",
    "Gold Gadget",
    "Lemon Magician Girl",
    "Lord Gaia the Fierce Knight",
    "Marshmacaron",
    "Marshmacaron",
    "Marshmacaron",
    "Palladium Oracle Mahad",
    "Sentry Soldier of Stone",
    "Silent Magician",
    "Silent Swordsman",
    "Silent Swordsman LV5",
    "Silver Gadget",
    "Dark Magic Veil",
    "Gold Sarcophagus",
    "Magical Contract Door",
    "Magical Dimension",
    "Monster Reborn",
    "Mystical Space Typhoon",
    "Polymerization",
    "Thousand Knives",
    "Dark Horizon",
    "Dig of Destiny",
    "Dimension Guardian",
    "Dimension Mirage",
    "Dimension Reflector",
    "Dimension Sphinx",
    "Final Geas",
    "Magic Cylinder",
    "Magician's Defense",
    "Metalhold the Moving Blockade",
    "Metamorphotress",
    "Mirror Force",
    "Spirtual Swords of Revealing Light",
    "Time Chain",
    "Warrior's Devotion"
]

let shuffledDeck = []

/*
function initDeck(cards) {
    for (let i = 0; i < cards; i++) {
        deck.push(`Card ${i + 1}`)
    }

    return deck
}
*/

function shuffle() {
    let index = deck.length, random
    while (index > 0) {
        random = rollRandom(0, index)
        index--

        [deck[index], deck[random]] = [deck[random], deck[index]]
    }
    return deck
}

function draw(int) {
    for (let i = 0; i < int; i++) {
        let x = rollRandom(0, deck.length)
        deck.splice(x, 1)

        console.log(deck[x])
    }
}


