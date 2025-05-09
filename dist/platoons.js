"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
class Platoon {
    constructor(_type, _size, _commader) {
        this._type = _type;
        this._size = _size;
        this._commader = _commader;
    }
    get type() {
        return this._type;
    }
    get size() {
        return this._size;
    }
    get commader() {
        return this._commader;
    }
    // find the count of soldiers that can handle the target platoon
    handlingSoliderCount(targetPlatoon) {
        if (config_1.PLATOONSADVANTAGES[this._type].includes(targetPlatoon._type)) {
            //advantages based on commander
            return this._size * 2;
        }
        return this._size;
    }
}
exports.default = Platoon;
