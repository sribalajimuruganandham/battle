import Commander from "./commander";
import Troops from "./troop";
export default class Platoon {
  constructor(private _troops: Troops[], private _commader: Commander) {}
  get troops(): Troops[] {
    return this._troops;
  }
  get commader(): Commander {
    return this._commader;
  }
}
