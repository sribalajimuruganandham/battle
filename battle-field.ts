import Platoon from "./platoons";
export default class battleField {
  battleStatus(myPlatoons: Platoon[], opponentPlatoons: Platoon[]):string|null {
    let win = 0;
    for (let i = 0; i < 5; i++) {
      const mySoliderHandlingCount = myPlatoons[i].handlingSoliderCount(
        opponentPlatoons[i]
      );
      const opponentSoliderHandlingCount = opponentPlatoons[
        i
      ].handlingSoliderCount(myPlatoons[i]);
      //compare each platoons to decide the winner of the current battle
      if (mySoliderHandlingCount > opponentSoliderHandlingCount) win++;
    }
    if (win >= 3) {
      //formatting the result
      return myPlatoons.map((p) => p.type + p.size).join(";");
    }
    return null;
  }
}
