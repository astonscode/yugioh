const altTable = {
    data: [{
        name: "Dark Magician",
        checkAvailable() {
            const card = fetchCard("Dark Magician")
            return card.card_images.length
        }
    }],
    add (index) {

    }, 
    remove(index) {

    }
}