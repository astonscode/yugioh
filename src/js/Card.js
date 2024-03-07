class Card {
    constructor(id) {
        this.setId = id
        this.typeOf = cardDatabase[this.setId].typeOf
        if (this.typeOf == 0) {
            this.name = cardDatabase[this.setId].name
            this.info = cardDatabase[this.setId].info
            this.type = cardDatabase[this.setId].type
            this.subtype = cardDatabase[this.setId].subtype
            this.attr = cardDatabase[this.setId].attr
            this.exClasses = cardDatabase[this.setId].exClasses

            this.level 
            this.rank = cardDatabase[this.setId].rank
            this.pendulumMin
            this.pendulumMax
            this.link = cardDatabase[this.setId].link
            this.decType
            this.showDef
            this.control

            this.atk = cardDatabase[this.setId].atk
            this.def = cardDatabase[this.setId].def
            this.bgColor
            this.effectColor = "#fff"

            this.detectColor()
            this.initLevel()
            this.initType()
            this.defCheck()

            return getConsoleMessageFromId(0);
        } else {
            return getConsoleMessageFromId(1)
        }
    }

    setAttr(attr, value) {
        if (attr == 0) {
            this.typeOf = value
        } else if (attr == 1) {
            this.name = value
        } else if (attr == 2) {
            this.info = value
        } else if (attr == 3) {
            this.type = value
        } else if (attr == 4) {
            this.subtype = value
        } else {
            console.error("?")
        }
    }

    seetAttr(attr, value) {
        attr == 0 ? this.typeOf = value
        : attr == 1 ? this.name = value
        : attr == 2 ? this.info = value
        : attr == 3 ? this.type = value
        : attr == 4 ? this.subtype = value
        : console.error("?");
    }

    setLevel(int) {
        this.level = int
        this.placeCard()
    }

    setRank(int) {
        this.rank = int
        this.placeCard()
    }

    setLinkRating(int) {
        if (int > 6) {
            console.log("Link Rating could not be set: Rating exceeds standardized arrow limit.")
        } else {
            this.link = int
            this.placeCard()
        }
    }

    setStats(int1, int2) {
        this.atk = int1
        this.def = int2
        this.placeCard()
    }

    initLevel() {
        let x;
        let y;

        if (this.type == 6) {
            x = cardDatabase[this.setId].rank
        } else if (this.type == 8) {
            x = `${cardDatabase[this.setId].link}`
            y = this.bgColor
        } else {
            x = cardDatabase[this.setId].level
        }
        return x
    }

    initType() {
        let a; 

        if (this.type == 0) {
            this.decType = "Normal"
        } else if (this.type == 1 || this.type == 100 || this.type == 101 || this.type == 102) { // Effect
            this.decType = "Effect"
        } else if (this.type == 2) { // Token
            this.decType = "Token"
        } else if (this.type == 3) { // Ritual
            this.decType = "Ritual"
        } else if (this.type == 4) { // Fusion
            this.decType = "Fusion"
        } else if (this.type == 5) { // Synchro
            this.decType = "Synchro"
        } else if (this.type == 6) { // XYZ
            this.decType = "Xyz"
        } else if (this.type == 7) { // Pendulum
            this.decType = "Pendulum"
        } else if (this.type == 8) { // Link
            this.decType = "Link"
        }

        return a;
    }

    detectColor() {
        if (this.type == 0) { // Normal
            this.bgColor = "#f0c956"
        } else if (this.type == 1) { // Effect
            this.bgColor = "#b06f20"
        } else if (this.type == 2) { // Token
            this.bgColor = "#858177"
        } else if (this.type == 3) { // Ritual
            this.bgColor = "#265e8c"
        } else if (this.type == 4) { // Fusion
            this.bgColor = "#803e9e"
        } else if (this.type == 5) { // Synchro
            this.bgColor = "#dbdbdb"
        } else if (this.type == 6) { // XYZ
            this.bgColor = "#000"
        } else if (this.type == 7) { // Pendulum
            this.bgColor = "#56766c"
        } else if (this.type == 8) { // Link
            this.bgColor = "#346eeb"
        } else if (this.type == 100) { // Slifer
            this.bgColor = "#cc1b1b"
        } else if (this.type == 101) { // Obelisk
            this.bgColor = "#0058cc"
        } else if (this.type == 102) { // Ra
            this.bgColor = "#c59422"
        }
    }

    defCheck() {
        if (this.link == undefined) {
            this.showDef = ""
        } else {
            this.showDef = "none"
        }
    }
    
    changeControl(player) {
        if (player == 0) {
            this.control = 0
        } else {
            this.control = 1
        }
    }

    placeCard(side) {
        if (side == 0) {
            this.control = 0
        } else {
            this.control = 1
        }
        document.getElementById(`cardList`).innerHTML += `
        <div class="monsterCard card ${this.decType[0].toLowerCase() + this.decType.slice(1)} ${this.exClasses}">
        <div id="monsterInfo" class="flex-column">
            <div id="monsterName">
                <div id="levelDisplay" style="background: ${this.bgColor}"> ${this.initLevel()} </div>
                <div id="monsterName"> ${this.name} </div>
            </div>
            <div id="monsterSub" class="flex">
                <div id="monsterType" class="monsterSub"> ${this.decType} </div>
                <div id="monsterSubtype" class="monsterSub"> ${this.subtype} </div>
            </div>
            <div class="monsterDesc"> ${this.info} </div>
            <div id="statDisplay">
                <div id="atk" class="stat" style="${this.effectColor}"> ${this.atk} </div>
                <div id="def" class="stat ${this.showDef}" style="${this.effectColor}"> ${this.def} </div>
            </div>
        </div>
    </div>
        `
    }
}