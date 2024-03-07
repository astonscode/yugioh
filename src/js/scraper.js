import puppeteer from "puppeteer"

export default async function retrieve(url) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })

    const page = await browser.newPage()

    await page.goto(url, {waitUntil: "domcontentloaded"})

    const get = await page.evaluate(() => {
        imgSet = []
        
        for (let i = 0; i < document.querySelectorAll(".thumb a.image img").length; i++) {
            x = document.querySelectorAll(".thumb a.image img")[i].src
            imgSet.push(x)
        }

        if (imgSet != undefined) {
            console.log(imgSet)
            return imgSet
        } else {
            console.log(document.querySelectorAll(".thumb a.image img")[0].src)
            return document.querySelectorAll(".thumb a.image img")[0].src
        }
    })

    console.log(get)
    
    await browser.close();
}

retrieve("https://yugipedia.com/wiki/Card_Artworks:Dark_Magician")
