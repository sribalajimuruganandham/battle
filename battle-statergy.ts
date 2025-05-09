import Platoon from "./platoons";
import BattleField from "./battle-field";
import Commander from "./commander";
import Troops from "./troop";
export default class BattleStatergy {
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
  train(myPlatoons: string,commaderAdvantages:string): Platoon[] {
    //format the platoons
    let advantages:string[] = commaderAdvantages.split("#");
    //to remove first word "commander"
    advantages.shift();
    const platoons = myPlatoons.split(";").map((platoon) => {
      return this.platoonsFormation(platoon,advantages);
    });
    return platoons;
  }
  platoonsFormation(platoon: string,commaderAdvantages:string[]): Platoon {
    //create object of platoon
    let formatedTroops = platoon.split('&').map((troop)=>{
      return this.troopsFormation(troop);
    })
    return new Platoon(formatedTroops,new Commander(commaderAdvantages));
  }
  troopsFormation(troops:string){
    const [type, size] = troops.split("#");
    return new Troops(type, parseInt(size)); 
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
