/*
function init(cards) {
    for (let i = 0; i < cards; i++) {
        a.push(`Card ${i + 1}`)
    }

    return a
}
*/

function shuffle(id) {
    let a = users[id].active.deck[0]

    let index = a.length, rand
    while (index > 0) {
        rand = random(0, index)
        index--

        [a[index], a[rand]] = [a[rand], a[index]]
    }
    return a
}

function draw(id, int) {
    let a = users[id].active.deck[0]
    if (isNaN(int) || int == undefined) {
        int = 1
    }
    
    for (let i = 0; i < int; i++) {
        let x = random(0, a.length)

        console.log(x, a[x])

        if (a[x] == undefined) {
            a.push(a[x])
        }

        cardAsker(a[x])

        a.splice(x, 1)
    }
}


