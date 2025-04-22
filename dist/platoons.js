"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
class Platoon {
    constructor(_type, _size) {
        this._type = _type;
        this._size = _size;
    }
    get type() {
        return this._type;
    }
    get size() {
        return this._size;
    }
    // find the count of soldiers that can handle the target platoon
    handlingSoliderCount(targetPlatoon) {
        if (config_1.PLATOONSAdVANTAGES[this._type].includes(targetPlatoon._type)) {
            return this._size * 2;
        }
        return this._size;
    }
}
exports.default = Platoon;
