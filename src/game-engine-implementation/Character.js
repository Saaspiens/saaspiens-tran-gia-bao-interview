export default class Character {
    health;
    level;
    hitDamage;
    maxHealth;
    isDead;
    config;

    constructor(level, config) {
        this.config = config;
        this.level = level;
        this.maxHealth = this.config.maxHealth * this.level;
        this.hitDamage = this.config.hitDamage * this.level;
        this.health = this.maxHealth;
        this.isDead = false;
    }

    attack(character) {
        character.takeAHit(this.hitDamage);
    }

    takeAHit(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        this.health = 0;
        this.isDead = true;
    }
}
