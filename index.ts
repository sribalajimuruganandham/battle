import BattleStatergy from "./battle-statergy";
class Battle {
  startBattle(myPlatoons: string, opponentPlatoons: string,myCommander:string="",opponentCommander:string=""): void {
    const battleStatergy = new BattleStatergy();
    //format the platoons
    myCommander = myCommander ? myCommander : "";
    opponentCommander = opponentCommander ? opponentCommander : "";
    console.log(myCommander,opponentCommander);
    const myTrainedPlatoons = battleStatergy.train(myPlatoons,myCommander)
    const opponentTrainedPlatoons = battleStatergy.train(opponentPlatoons,opponentCommander);
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
const [, , myPlatoons, opponentPlatoons,myCommander,opponentCommander] = process.argv;
if (myPlatoons && opponentPlatoons) {
  const battle = new Battle();
  battle.startBattle(myPlatoons, opponentPlatoons,myCommander,opponentCommander);
} else {
  console.log("Please provide the platoons");
}
