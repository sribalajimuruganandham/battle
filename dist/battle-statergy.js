"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platoons_1 = require("./platoons");
const battle_field_1 = require("./battle-field");
const commander_1 = require("./commander");
class BattleStatergy {
    battleStatergy(myTrainedPlatoons, opponentTrainedPlatoons) {
        //generate combinations of platoons
        let myTrainedPlatoonsSeq = this.generatePermutations(myTrainedPlatoons);
        const battleField = new battle_field_1.default();
        for (let myTrainedPlatoons of myTrainedPlatoonsSeq) {
            //create battle for each combination
            let status = battleField.battleStatus(myTrainedPlatoons, opponentTrainedPlatoons);
            if (status) {
                return status;
            }
        }
        return null;
    }
    train(myPlatoons, commaderAdvantages) {
        //format the platoons
        let advantages = commaderAdvantages.split("#");
        //to remove first word "commander"
        advantages.shift();
        const platoons = myPlatoons.split(";").map((platoon) => {
            return this.platoonsFormation(platoon, advantages);
        });
        return platoons;
    }
    platoonsFormation(platoon, commaderAdvantages) {
        //create object of platoon
        const [type, size] = platoon.split("#");
        return new platoons_1.default(type, parseInt(size), new commander_1.default(commaderAdvantages));
    }
    //generate all possible combinations of platoons
    generatePermutations(arr) {
        const results = [];
        function permute(index) {
            if (index === 5) {
                results.push([...arr]);
                return;
            }
            for (let i = index; i < 5; i++) {
                [arr[index], arr[i]] = [arr[i], arr[index]];
                permute(index + 1);
                [arr[index], arr[i]] = [arr[i], arr[index]];
            }
        }
        permute(0);
        return results;
    }
}
exports.default = BattleStatergy;
