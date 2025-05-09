import { PLATOONSADVANTAGES } from "./config";

export default class Troops{
    constructor(private _type:string,private _size:number,private _powers?:string){

    }
    get type(): string {
        return this._type;
      }
    
    get size(): number {
        return this._size;
      }
      
    get power(): string | undefined {
        return this._powers;
    }
      // find the count of soldiers that can handle the target platoon
  handlingSoliderCount(targetTroops: Troops): number {
    if (PLATOONSADVANTAGES[this._type].includes(targetTroops._type)) {
      //advantages based on commander
      return this._size * 2;
    }
    return this._size;
  }
}