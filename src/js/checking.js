let delay = 1500

setInterval(()=>{
    let a = document.querySelectorAll("#cards #card").length
    document.getElementById("handCount").textContent = a 

    function handEffects() {
        for (let i = 0; i > document.querySelectorAll("#cards #card").length; i++) {

        }
    }

    let mainDeckA = users[0].active.deck[0].length
    let exDeckA = users[0].active.deck[1].length
    let graveyardA = 0
    let banishedA = 0

    document.querySelectorAll("#deck-value")[0].innerHTML = mainDeckA
    document.querySelectorAll("#deck-value")[1].innerHTML = exDeckA
    document.querySelectorAll("#deck-value")[2].innerHTML = graveyardA
    document.querySelectorAll("#deck-value")[3].innerHTML = banishedA

    delay = 0
}, 500 + delay)

setTimeout(()=>{
    setInterval(()=>{
        for (let i = 0; i < document.querySelectorAll("#deck-value").length; i++) {
            let x = document.querySelectorAll(".cardPile #deck-value")[i].innerHTML
        
            console.log(x)

            if (i == 2 || i == 3 || i == 6 || i == 7) {
                if (x < 10) {
                    console.log("pass: gy/bn condition 1")
                    document.querySelectorAll(".cardPile")[i].style.boxShadow = `inset 0 0 0 2.5px #fff3`
                } else if (x > 10 && x < 25 ) {
                    console.log("fail: gy/bn condition 1")
                    console.log("pass: gy/bn condition 2")
                    document.querySelectorAll(".cardPile")[i].style.boxShadow = `inset 0 0 0 2.5px #fff5`
                } else if (x > 25) {
                    console.log("fail: gy/bn condition 1")
                    console.log("fail: gy/bn condition 2")
                    console.log("pass: gy/bn condition 3")
                    document.querySelectorAll(".cardPile")[i].style.boxShadow = `inset 0 0 0 2.5px #fff8`
                } else {
                    console.log("failed all gy/banish conditions.")
                    document.querySelectorAll(".cardPile")[i].style.boxShadow = `inset 0 0 0 2.5px #fff8`
                }
            } else if (i == 1 || i == 5) {
                if (x > 10) {
                    console.log("pass: ex condition 1")
                    document.querySelectorAll(".cardPile")[i].classList.add("high")
                } else if( x < 10 && x > 5) {
                    console.log("fail: ex condition 1")
                    console.log("pass: ex condition 2")
                    document.querySelectorAll(".cardPile")[i].classList.add("mid")
                } else if (x < 5) {
                    console.log("fail: ex condition 1")
                    console.log("fail: ex condition 2")
                    console.log("pass: ex condition 3")
                    document.querySelectorAll(".cardPile")[i].classList.add("low")
                } else {
                    console.log("failed all ex conditions.")
                    document.querySelectorAll(".cardPile")[i].classList.add("low")
                }
            } else {
                if (x > 25) {
                    console.log("pass: condition 1")
                    document.querySelectorAll(".cardPile")[i].classList.add("high")
                } else if(x < 25 && x > 10) {
                    console.log("fail: condition 1")
                    console.log("pass: condition 2")
                    document.querySelectorAll(".cardPile")[i].classList.add("mid")
                } else if (x < 10) {
                    console.log("fail: condition 1")
                    console.log("fail: condition 2")
                    console.log("pass: condition 3")
                    document.querySelectorAll(".cardPile")[i].classList.add("low")
                } else {
                    console.log("failed all conditions.")
                    document.querySelectorAll(".cardPile")[i].classList.add("low")
                }
            }
        }}, 50)      
}, 500 + delay)

function alternateArtCheck(name) {
    let availableArtworks;
    if (name == "Dark%20Magician" || name == "Dark Magician") {
        availableArtworks++
    }
}
