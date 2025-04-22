"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLATOONSAdVANTAGES = void 0;
exports.PLATOONSAdVANTAGES = {
    Militia: ["Spearmen", "LightCavalry"],
    Spearmen: ["LightCavalry", "HeavyCavalry"],
    LightCavalry: ["FootArcher", "CavalryArcher"],
    HeavyCavalry: ["Militia", "FootArcher", "LightCavalry"],
    CavalryArcher: ["Spearmen", "HeavyCavalry"],
    FootArcher: ["Militia", "CavalryArcher"],
};
