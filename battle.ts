class Battle {
    startBattle(myPlatoons: string, opponentPlatoons: string): void {
      const myTrainedPlatoons = Platoons.train(myPlatoons);
      const opponentTrainedPlatoons = Platoons.train(opponentPlatoons);
      const battleField = new BattleField();
     let status = battleField.battleStatergy(myTrainedPlatoons,opponentTrainedPlatoons);
     if(status){
      console.log(status)
     }else {
      console.log("There is no chance of winning");
     }
    }
  }
