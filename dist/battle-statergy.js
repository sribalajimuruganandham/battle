"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platoons_1 = require("./platoons");
const battle_field_1 = require("./battle-field");
class battleStatergy {
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
    train(myPlatoons) {
        //format the platoons
        const platoons = myPlatoons.split(";").map((platoon) => {
            return this.platoonsFormation(platoon);
        });
        return platoons;
    }
    platoonsFormation(platoon) {
        //create object of platoon
        const [type, size] = platoon.split("#");
        return new platoons_1.default(type, parseInt(size));
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
exports.default = battleStatergy;
