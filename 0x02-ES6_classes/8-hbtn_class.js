export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size attr
  get size() {
    return (this._size);
  }

  // Setter for size attr
  set size(value) {
    this._size = value;
  }

  // Getter for location attr
  get location() {
    return (this._location);
  }

  // Setter for location attr
  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return (this.size);
    }
    if (hint === 'string') {
      return (this.location);
    }
    return (this);
  }
}
