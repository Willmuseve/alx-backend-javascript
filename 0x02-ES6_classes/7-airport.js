export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for name attr
  get name() {
    return (this._name);
  }

  // Setter for name attr
  set name(value) {
    this._name = value;
  }

  // Getter for code attr
  get code() {
    return (this._code);
  }

  // Setter for code attr
  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return (this._code);
  }
}
