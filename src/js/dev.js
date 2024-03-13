const debug = {
    addCard(from, id) {
        
    }
}

function uuid(len){
    const d = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]

    let uuid, newuuid = "";

    for (let i = 0; i <= len; i++) {
        let rnd = random(0, d.length)
        uuid += d[rnd]

        newuuid = uuid.slice(8)

        if (newuuid.includes("undefined")) {
            newuuid.replace("undefined", 0)
        }
    }

    return newuuid
}