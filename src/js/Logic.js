const Logic = {
    conditionMap: [
        {id: 0, condition: "Normal Summon", nameid: 'smn_n'},
        {id: 1, condition: "Special Summon", nameid: 'smn_sp'},
        {id: 2, condition: "Tribute Summon", nameid: 'smn_sc'},
        {id: 3, condition: "Fusion Summon", nameid: 'smn_sp_fs'},
        {id: 4, condition: "Ritual Summon", nameid: 'smn_sp_rt'},
        {id: 5, condition: "Synchro Summon", nameid: 'smn_sp_sy'},
        {id: 6, condition: "Xyz Summon", nameid: 'smn_sp_xyz'},
        {id: 7, condition: "Pendulum Summon", nameid: 'smn_sp_pn'},
        {id: 8, condition: "Link Summon", nameid: 'smn_sp_lk'},
        {id: 9, condition: "Flip Summon", nameid: 'smn_flip'},
        {id: 10, condition: "Token Summon", nameid: 'smn_token'}, 
        {id: 11, condition: "Normal Set", nameid: 'smn_set'}
    ], 
    battle(atk1, atk2, isAttacking, isDefending, def) {
        if (isAttacking == 0) {
            if (isDefending == true) {
                if (atk1 > def) {
                    return `P2 Card destroyed. (No battle damage.)`
                } else if (atk1 == def) {
                    return `P1 and P2's card remain on the field. (No battle damage.)`
                } else if (atk1 < def) {
                    return `P1 and P2's card remain on the field. (P1 took ${def - atk1} battle damage.)`
                }
            } else {
                if (atk1 > atk2) {
                    return `P2 card destroyed. (P2 took ${atk1 - atk2} battle damage.)`
                } else if (atk1 == atk2) {
                    return `P1 and P2's card are destroyed. (No battle damage.)`
                } else if (atk1 < atk2) {
                    return `P1 card destroyed. (P1 took ${atk2 - atk1} battle damage.)`
                }
            }
        } else if (isAttacking == 1) {
            if (isDefending == true) {
                if (atk1 > def) {
                    return `P1 Card destroyed. (No battle damage.)`
                } else if (atk1 == def) {
                    return `P1 and P2's card remain on the field. (No battle damage.)`
                } else if (atk1 < def) {
                    return `P1 and P2's card remain on the field. (P2 took ${def - atk1} battle damage.)`
                }
            } else {
                if (atk1 > atk2) {
                    return `P1 card destroyed. (P1 took ${atk1 - atk2} battle damage.)`
                } else if (atk1 == atk2) {
                    return `P1 and P2's card are destroyed. (No battle damage.)`
                } else if (atk1 < atk2) {
                    return `P2 card destroyed. (P2 took ${atk2 - atk1} battle damage.)`
                }
            }
        }
    }
}