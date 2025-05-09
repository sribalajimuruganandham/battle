import Platoon from "./platoons";
import Troops from "./troop";
export default class BattleField {
  battleStatus(
    myPlatoons: Platoon[],
    opponentPlatoons: Platoon[]
  ): string | null {
    let win = 0;
    for (
      let advantagePosition = 0;
      advantagePosition < 5;
      advantagePosition++
    ) {
      for (let i = 0; i < 5; i++) {
        //sum of all troops will be assign to SoliderCount
        
        let  mySoliderHandlingCount = 0;
        myPlatoons[i].troops.forEach((troop:Troops) => {
          mySoliderHandlingCount += this.advantageHandler(
          troop,
          opponentPlatoons[i].troops[0],
          advantagePosition == i,
          opponentPlatoons[i].commader.advantages
        );
       });
        const opponentSoliderHandlingCount = 0;
        opponentPlatoons[i].troops.forEach((troop:Troops) => {
          opponentSoliderHandlingCount + this.advantageHandler(
          opponentPlatoons[i].troops[0],
          myPlatoons[i].troops[0],
          advantagePosition == i,
          myPlatoons[i].commader.advantages

        );
      });

        //compare each platoons to decide the winner of the current battle
        if (mySoliderHandlingCount > opponentSoliderHandlingCount) win++;
      }
      if (win >= 3) {
        //formatting the result
        return myPlatoons.map((p) => p.troops.map((troop)=> troop.type +'#'+ troop.size).join('&')).join(";");
      }
    }
    return null;
  }

  advantageHandler(
    sourcePlatoon: Troops,
    targetPlatoon: Troops,
    isAdvantageApply: boolean,
    advantages:string[]
  ) {
    if (isAdvantageApply) {
      for (let advantage of advantages) {
        switch (advantage) {
          case "targetWeakness":
            return sourcePlatoon.size;
        }
      }
    }
      return sourcePlatoon.handlingSoliderCount(targetPlatoon);
    
  }
}
