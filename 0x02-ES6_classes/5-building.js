export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // Getter for sqft attr
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft attr
  set sqft(value) {
    this._sqft = value;
  }
}
