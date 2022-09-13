import Hero from "./Hero";
import Combat from "./Combat";

export const Config = {
    hero: {
        maxHealth: 100,
        hitDamage: 50,
        experienceToNextLevel: 150
    },
    enemy: {
        maxHealth: 30,
        hitDamage: 15,
        experienceGiven: 50
    },
    boss: {
        maxHealth: 130,
        hitDamage: 70,
        experienceGiven: 100
    }
}

export default class GamePlay {
    static fight(firstCharacter, secondCharacter) {
        if (!(firstCharacter instanceof Hero) && !(secondCharacter instanceof Hero)) {
            return;
        }

        const combat = new Combat(secondCharacter, firstCharacter);
        do {
            combat.turn();
            combat.attack();
        } while (!combat.isFinished())
    }
}
