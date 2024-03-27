import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for floors attr
  get floors() {
    return (this._floors);
  }

  // Setter for floors attr
  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
