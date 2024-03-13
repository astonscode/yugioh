async function fetchCard(name) {
    name = name.replace(/ /g,"%20")
    name = name.replace(/&/g, "%26")

    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Response returned invalid. Could not fetch")
        }

        const data = await response.json()
        
        let card = data.data[0]

        alternateArtCheck(name)

        return card

    } catch(error) {

        console.error(error)

    }
}
