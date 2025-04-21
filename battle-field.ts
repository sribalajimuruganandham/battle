class battleField{
    battleStatus(myPlatoons: string, opponentPlatoons: string){
        for (let i = 0; i < 5; i++) {
            const mySoliderHandlingCount = myPlatoons[i].handlingSoliderCount(opponentPlatoons[i]);
            const opponentSoliderHandlingCount = opponentPlatoons[i].myPlatoons(arrangement[i]);
      
            if (mySoliderHandlingCount > opponentSoliderHandlingCount) win++;
          }
          if (win >= 3) {
            return myPlatoons.map((p) => p.toString()).join(';');
          }
          return null;
    }
}