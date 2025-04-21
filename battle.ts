class Battle {
    startBattle(myPlatoons: string, opponentPlatoons: string): void {
      const myTrainedPlatoons = Platoons.train(myPlatoons);
      const opponentTrainedPlatoons = Platoons.train(opponentPlatoons);
      const battleField = new BattleField();
      battleField.battleStatergy(myTrainedPlatoons,opponentTrainedPlatoons);
    }
  }
