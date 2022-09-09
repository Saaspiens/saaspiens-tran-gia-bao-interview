const { describe, test, expect } = global;
import GamePlay, { Config } from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Enemy from '../../src/game-engine-implementation/Enemy';
import Boss from '../../src/game-engine-implementation/Boss';

describe('GE-sample-simple-fight', function () {

    test('If hero will take damage and defeat the enemy', () => {
        const hero = new Hero(2);
        const enemy = new Enemy(4);

        GamePlay.fight(hero, enemy);

        expect(hero.health).toBe(140);
        expect(enemy.health).toBe(0);
    })

    test('If no hero', () => {
        const enemy1 = new Enemy(2);
        const enemy2 = new Enemy(4);

        GamePlay.fight(enemy1, enemy2);

        expect(enemy1.health).toBe(60);
        expect(enemy2.health).toBe(120);
    })

    test('2 heros', () => {
        const hero1 = new Hero(3);
        const hero2 = new Hero(4);

        GamePlay.fight(hero1, hero2);

        expect(hero1.health).toBe(0);
        expect(hero2.health).toBe(130);
    })

    test('If hero will take damage and defeat the enemy and receive exp and up level', () => {
        const hero = new Hero(1);
        const enemy = new Enemy(4);

        GamePlay.fight(hero, enemy);

        expect(hero.experience).toBe(50);
        expect(hero.level).toBe(2);
        expect(hero.maxHealth).toBe(200);
        expect(hero.hitDamage).toBe(100);
    })

    test('If hero will take damage and defeat the boss and receive exp and up level and increase lifes', () => {
        const hero = new Hero(2);
        const boss = new Boss(1);

        GamePlay.fight(hero, boss);

        expect(hero.lifes).toBe(3);
    })

    test('If hero will take damage and defeat the boss and receive exp and up level and increase lifes but die 1', () => {
        const hero = new Hero(2);
        const boss = new Boss(2);

        GamePlay.fight(hero, boss);

        expect(hero.lifes).toBe(2);
    })
});
