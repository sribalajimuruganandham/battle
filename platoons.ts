export class Platoon{
     platoonsAdvantages: Record<string, string[]> = {
        Militia: ["Spearmen", "LightCavalry"],
        Spearmen: ["LightCavalry", "HeavyCavalry"],
        LightCavalry: ["FootArcher", "CavalryArcher"],
        HeavyCavalry: ["Militia", "FootArcher", "LightCavalry"],
        CavalryArcher: ["Spearmen", "HeavyCavalry"],
        FootArcher: ["Militia", "CavalryArcher"],
      }
      constructor(private _type: string, private _size: number) {}
      get type(): string {
        return this._type;
      }

  get size(): number {
    return this._size;
  }
    train(myPlatoons:string,opponentPlatoons:string){
      const platoons = myPlatoons.split(";").map(platoon=>{
        return this.platoonsFormation(platoon);
      });
      return platoons;
    }
    platoonsFormation(platoon:string){
      const [type, size] = platoon.split("#");
      return new Platoon(type, parseInt(size));
    }
    handlingSoliderCount(targetPlatoon:any){
      if (this.platoonsAdvantages[this._type].includes(targetPlatoon._type)) {
        return this._size * 2;
      }
      return this._size;
    }
}