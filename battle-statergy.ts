import Platoon from "./platoons";
import BattleField from "./battle-field";
export default class battleStatergy {
  battleStatergy(
    myTrainedPlatoons: Platoon[],
    opponentTrainedPlatoons: Platoon[]
  ): string | null {
    //generate combinations of platoons
    let myTrainedPlatoonsSeq = this.generatePermutations(myTrainedPlatoons);
    const battleField = new BattleField();
    for (let myTrainedPlatoons of myTrainedPlatoonsSeq) {
      //create battle for each combination
      let status = battleField.battleStatus(
        myTrainedPlatoons,
        opponentTrainedPlatoons
      );
      if (status) {
        return status;
      }
    }
    return null;
  }
  train(myPlatoons: string): Platoon[] {
    //format the platoons
    const platoons = myPlatoons.split(";").map((platoon) => {
      return this.platoonsFormation(platoon);
    });
    return platoons;
  }
  platoonsFormation(platoon: string): Platoon {
    //create object of platoon
    const [type, size] = platoon.split("#");
    return new Platoon(type, parseInt(size));
  }
  //generate all possible combinations of platoons
  generatePermutations(arr: Platoon[]): Platoon[][] {
    const results: Platoon[][] = [];
    function permute(index: number) {
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
