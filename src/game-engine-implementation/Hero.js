import Character from './Character';
import {Config} from './GamePlay';
import Boss from "./Boss";

export default class Hero extends Character {
    experience;
    lifes;
    nextExperience;

    constructor(level) {
        super(level, Config.hero);
        this.lifes = 2;
        this.experience = 0;
        this.nextExperience = this.level * this.config.experienceToNextLevel;
    }

    attack(character) {
        super.attack(character);
        if (!character.isDead) {
            return;
        }

        this.increaseExp(character);
        this.upLevel();
        if (character instanceof Boss) {
            this.lifes++;
        }
    }

    die() {
        if (this.lifes <= 0) {
            return;
        }

        this.lifes--;
        if (this.lifes > 0) {
            this.health = Math.round(this.maxHealth * 70 / 100);
            return;
        }

        super.die();
    }

    increaseExp(character) {
        if (character instanceof Hero) {
            this.experience += Math.round(character.experience / 2);
            return;
        }
        this.experience += Math.round(character.level * character.config.experienceGiven);
    }

    upLevel() {
        if (this.experience >= this.nextExperience) {
            this.level++;
            this.maxHealth = this.config.maxHealth * this.level;
            this.hitDamage = this.config.hitDamage * this.level;
            this.experience -= this.nextExperience;
            this.nextExperience = this.config.experienceToNextLevel * this.level;
        }
    }
}
