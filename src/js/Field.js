class Field {
  constructor(player, id) {
    this.controller = player
    this.playerID = id
    this.side
    this.parent = document.getElementById("duelFields")

    if (player == 0) {
      this.player = "Duelist 1"
      this.side = 0
    } else {
      this.player = "Duelist 2"
      this.side = 1
    }

    this.extraZones = 1
    this.zones = 5
    this.spellTrapZones = 5
    this.fieldZones = 1

    this.extraZoneMap = [null]
    this.zoneMap = [null, null, null, null, null]
    this.zoneOverlay = [null, null, null, null]
    this.spellZoneMap = [null, null, null, null, null]
    this.spellZoneOverlay = [null, null, null, null]
    this.fieldSpellMap = [null]

    // this.genHTML(this.side)
  }

  summon(card, position, zone) {
    console.log(Logic.conditionMap[position])

    if (zone == 6) {
      if (card.extraDeck == true && this.extraZones == 1) {
        this.extraZoneMap = [card]
        extraZones = 0
      } else {
        zone = 3
      }
    }
    
    if (this.zones > 0) {
      this.zones--
      if (zone < 1 || zone > 5 || zone == undefined) {
        zone = 3
      } else {
        this.zoneMap[zone - 1] = card
        return card
      }
    } else {
      console.log("your field is full...")
      return card
    }
  }

  field() {
    console.log(`${this.controller}'s field:`)
    console.log("%cEX ZONE", "margin-right:12px", this.extraZoneMap)
    console.log("%cMONSTER ZONES", "margin-right:12px", this.zoneMap)
    console.log("%cSPELL ZONE (FIELD)", "margin-right:12px", this.fieldZoneMap)
    console.log("%cSPELL ZONE", "margin-right:12px", this.spellTrapZoneMap)
  }

  clear() {
    this.extraZones = 1
    this.zones = 5
    this.spellTrapZones = 5
    this.fieldZones = 1

    this.extraZoneMap = [null]
    this.zoneMap = [null, null, null, null, null]
    this.spellTrapZoneMap = [null, null, null, null, null]
    this.fieldZoneMap = [null]
  }
}