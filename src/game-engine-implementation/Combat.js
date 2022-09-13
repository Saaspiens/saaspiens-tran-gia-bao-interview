export default class Combat {
    attacker;
    defender;

    constructor(_attacker, _defender) {
        this.attacker = _attacker;
        this.defender = _defender;
    }

    turn() {
        let tempChar = [this.defender, this.attacker];
        [this.attacker, this.defender] = tempChar;
        tempChar = [];
    }

    attack() {
        this.attacker.attack(this.defender);
    }

    isFinished() {
        return this.defender.isDead;
    }
}
