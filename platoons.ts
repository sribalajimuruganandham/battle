import { PLATOONSADVANTAGES } from "./config";
export default class Platoon {
  constructor(private _type: string, private _size: number) {}
  get type(): string {
    return this._type;
  }

  get size(): number {
    return this._size;
  }
  // find the count of soldiers that can handle the target platoon
  handlingSoliderCount(targetPlatoon: Platoon): number {
    if (PLATOONSADVANTAGES[this._type].includes(targetPlatoon._type)) {
      return this._size * 2;
    }
    return this._size;
  }
}
