import BattleStatergy from "./battle-statergy";
class Battle {
  startBattle(myPlatoons: string, opponentPlatoons: string): void {
    const battleStatergy = new BattleStatergy();
    //format the platoons
    const myTrainedPlatoons = battleStatergy.train(myPlatoons);
    const opponentTrainedPlatoons = battleStatergy.train(opponentPlatoons);
    let status = battleStatergy.battleStatergy(
      myTrainedPlatoons,
      opponentTrainedPlatoons
    );
    //result of battle
    if (status) {
      console.log(status);
    } else {
      console.log("There is no chance of winning");
    }
  }
}
const [, , myPlatoons, opponentPlatoons] = process.argv;
if (myPlatoons && opponentPlatoons) {
  const battle = new Battle();
  battle.startBattle(myPlatoons, opponentPlatoons);
} else {
  console.log("Please provide the platoons");
}
