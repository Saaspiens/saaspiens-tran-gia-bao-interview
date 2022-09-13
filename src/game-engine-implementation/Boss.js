import Character from './Character';
import { Config } from './GamePlay';

export default class Boss extends Character {
    constructor(level) {
        super(level, Config.boss);
    }
}
