/* Card Database Usage Info: 
typeOf: the typeOf variable defines if a card is a Monster, Spell, or Trap  (0-2)
name: the name of the card
info: the card's description 
      if there are any breaks needed, use the html <br> 
      if needed bullets, use the html <ul> <li> item </li> </ul>
type: the type variable defines if a card is normal, effect, fusion, etc. see 
      initType (Card.js: 80:1)
level: the base level value of the card
subtype: the subtype of the card (Fiend, Zombie, Dragon, etc.)
attr: the attribute of the card. the list goes as follows:
      Dark, Light, Fire, Water, Wind, Earth, Divine (0-6)
atk/def: the base damage/defense value of the card
id: card id in array
*/
import retrieve from '/src/js/scraper.js'

export const cardDatabase = [
    {
        typeOf: 0,
        name: "Dark Magician",
        info: "The ultimate wizard in terms of attack and defense.",
        type: 0,
        level: 7,
        subtype: "Spellcaster",
        attr: 0,
        atk: 2500,
        def: 2100,
        src: retrieve("https://yugipedia.com/wiki/Card_Artworks:Dark_Magician"),
        src_fallback: ["/src/img/cards/0.png"],
        id: 0,
    },
    {
        typeOf: 0,
        name: "Blue-Eyes White Dragon",
        info: "This legendary dragon is a powerful engine of destruction.",
        type: 0,
        level: 8,
        subtype: "Dragon",
        attr: 1,
        atk: 3000,
        def: 2500,
        id: 1
    },
    {
        typeOf: 0,
        name: "Dark Magician Girl",
        info: "The female counterpart to the Dark Magician, this card is known for its powerful magic.",
        type: 1,
        level: 6,
        subtype: "Spellcaster",
        attr: 0,
        atk: 2000,
        def: 1700,
        id: 2
    },
    {
        typeOf: 0,
        name: "Elemental HERO Neos",
        info: "A powerful hero with the ability to harness the elements.",
        type: 4,
        level: 7,
        subtype: "Warrior",
        attr: 2,
        atk: 2500,
        def: 2000,
        id: 3
    },
    {
        typeOf: 0,
        name: "Clock Token", 
        info: `Special Summoned by the effect of "Clock Wyvern" or a related card.`,
        type: 2,
        level: 1,
        subtype: "Cyberse",
        attr: 4,
        atk: 0,
        def: 0,
        id: 4

    },
    {
        typeOf: 0,
        name: "Accesscode Talker",
        effectInfo: `2+ Effect Monsters <br> Your opponent cannot activate cards or effects 
        in response to this card's effect activations. If this card is Link Summoned: 
        You can target 1 Link Monster that was used as material for its Link Summon; 
        this card gains ATK equal to that monster's Link Rating x 1000. You can banish 
        1 Link Monster from your field or GY; destroy 1 card your opponent controls, 
        also for the rest of this turn, you cannot banish monsters with that same 
        Attribute to activate this effect of "Accesscode Talker".`,
        info: `A sleek and enigmatic entity adorned with intricate circuitry, ready to defend 
        with a calculated grace that belies its technological nature.`,
        type: 8,
        level: 0,
        link: 4,
        subtype: "Cyberse",
        attr: 0,
        atk: 2300,
        def: null,
        id: 5,
        extraDeck: true,
        src: ["./src/img/cards/6.png"]
    }, 
    {
        typeOf: 0,
        name: "Geomathmech Final Sigma",
        effectInfo: `1 Tuner + 1+ non-Tuner monsters <br>
        Unaffected by card effects, except "Mathmech" cards, while in the Extra 
        Monster Zone. If this card in the Extra Monster Zone battles an opponent's 
        monster, any battle damage it inflicts to your opponent is doubled. If this 
        card is destroyed by battle, or if this card in its owner's possession is 
        destroyed by an opponent's card effect: You can add 1 "Mathmech" card from 
        your Deck to your hand. You can only use this effect of "Geomathmech Final 
        Sigma" once per turn.`,
        info: `A mathematical marvel with geometric precision, stands as a silent 
        and powerful guardian, its intricate design symbolizing resilience and 
        strength in the face of unknown challenges.`,
        type: 5,
        level: 12,
        subtype: "Cyberse",
        attr: 0,
        atk: 3000,
        def: 0,
        id: 6,
        extraDeck: true,
        src: ["./src/img/cards/4.png"]
    }, 
    {
        typeOf: 0,
        name: "Ghoti of the Deep Beyond",
        info: "A mysterious aquatic creature with powers that dwell in the depths of the ocean.",
        type: 5,
        level: 5,
        subtype: "Fish",
        attr: 3, // Water
        atk: "?",
        def: 0,
        id: 7,
        extraDeck: true
    },
    {
        typeOf: 0,
        name: "Hot Red Archfiend Dragon",
        info: "A fiery dragon with the power to unleash devastating flames upon its foes.",
        type: 5,
        level: 8,
        subtype: "Dragon",
        attr: 1, // Fire
        atk: 3000,
        def: 2000,
        id: 8,
        extraDeck: true
    },
    {
        typeOf: 0,
        name: "Slifer the Sky Dragon",
        info: "The Egyptian God that wields the power of thunder and controls the skies.",
        type: 100,
        level: 10,
        subtype: "Divine-Beast",
        attr: 6, // Divine
        atk: "X000", // Slifer's attack depends on the number of cards in your hand
        def: "X000", // Slifer's defense depends on the number of cards in your hand
        id: 9,
        src: ["./src/img/cards/7.png"],
        exClasses: "slifer",
        __functions: {
            calculateValues(handValue) {
                this.atk, this.def = handValue * 1000
                return handValue * 1000
            }
        },
    },
    {
        typeOf: 0,
        name: "Obelisk the Tormentor",
        info: "The mighty Egyptian God with unparalleled strength and destructive power.",
        type: 101,
        level: 10,
        subtype: "Divine-Beast",
        attr: 6, // Divine
        atk: 4000,
        def: 4000,
        id: 10,
        exClasses: "obelisk",
        src: ["./src/img/cards/8.png"]
    },
    {
        typeOf: 0,
        name: "The Winged Dragon of Ra",
        info: "An ancient Egyptian God, known for its mighty presence and mysterious power tied to the balance of life essence.",
        type: 102,
        level: 10,
        subtype: "Divine-Beast",
        attr: 6, // Divine
        atk: "?", // Ra's attack depends on the life points paid
        def: "?",  // Ra's defense depends on the life points paid
        id: 11,
        exClasses: "ra",
        src: ["./src/img/cards/9.png"]
    },
    {
        typeof: 0,
        name: "Lady Debug",
        info: "A determined Cyberse scout, her lightning speed and sharp instincts guide allies through the digital battlefield with unwavering resolve.",
        type: 1, 
        level: 4, 
        subtype: "Cyberse",
        attr: 1, 
        atk: 1700, 
        def: 1400, 
        id: 12,
        src: ["./src/img/cards/1.png"]
    }, {
        name: "Cyberse Sage",
        type: 3, 
        level: 1, 
        subtype: "Cyberse",
        attr: 0, 
        atk: 0,
        def: 0,
        id: 13, 
        src: ["./src/img/cards/2.png"]
    }, {
        name: "Cyberse Clock Dragon",
        type: 4, 
        level: 7, 
        subtype: "Cyberse",
        attr: 2, 
        atk: 2500,
        def: 2000,
        id: 14,
        src: ["./src/img/cards/3.png"]
    },
    {
        name: "Firewall eXceed Dragon",
        type: 6, 
        level: 4, 
        subtype: "Cyberse",
        attr: 3, 
        atk: 2500,
        def: 2000,
        id: 15,
        src: ["./src/img/cards/5.png"]
    }
]