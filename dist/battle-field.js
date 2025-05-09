"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattleField {
    battleStatus(myPlatoons, opponentPlatoons) {
        let win = 0;
        for (let advantagePosition = 0; advantagePosition < 5; advantagePosition++) {
            for (let i = 0; i < 5; i++) {
                const mySoliderHandlingCount = this.advantageHandler(myPlatoons[i], opponentPlatoons[i], advantagePosition == i);
                const opponentSoliderHandlingCount = this.advantageHandler(opponentPlatoons[i], myPlatoons[i], advantagePosition == i);
                //compare each platoons to decide the winner of the current battle
                if (mySoliderHandlingCount > opponentSoliderHandlingCount)
                    win++;
            }
            if (win >= 3) {
                //formatting the result
                return myPlatoons.map((p) => p.type + p.size).join(";");
            }
        }
        return null;
    }
    advantageHandler(sourcePlatoon, targetPlatoon, isAdvantageApply) {
        if (isAdvantageApply) {
            for (let advantage of targetPlatoon.commader.advantages) {
                switch (advantage) {
                    case "targetWeakness":
                        return sourcePlatoon.size;
                }
            }
        }
        return sourcePlatoon.handlingSoliderCount(targetPlatoon);
    }
}
exports.default = BattleField;
