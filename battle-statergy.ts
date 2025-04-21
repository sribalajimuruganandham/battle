export class battleStatergy{
    battleStatergy(myTrainedPlatoons:string,opponentTrainedPlatoons:string){
          let myTrainedPlatoonsSeq = this.generatePermutations();
          for(let myTrainedPlatoons of myTrainedPlatoonsSeq){
            let status = battleField.battleStatus(myTrainedPlatoons,opponentTrainedPlatoons);
                if( status){
                    return status;
                }
                else{
                    return null;
                }
          }

    }
    generatePermutations(arr: string[]): string[][] {
        const results: string[][] = [];
        function permute(index: number) {
          if (index === 5) {
            results.push([...arr]);
            return;
          }
          for (let i = index; i < 5; i++) {
            [arr[index], arr[i]] =[arr[i], arr[index]];
            permute(index+1);
            [arr[index],arr[i]]=[arr[i], arr[index]];
          }
        }
        permute(0);
        return results;
      }
}