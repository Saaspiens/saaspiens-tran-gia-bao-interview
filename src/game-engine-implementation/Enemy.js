import Character from './Character';
import { Config } from './GamePlay';

export default class Enemy extends Character {
    constructor(level) {
        super(level, Config.enemy);
    }
}
