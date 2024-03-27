export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for code attr
  get code() {
    return this._code;
  }

  // Setter for code attr
  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Getter for name attr
  get name() {
    return this._name;
  }

  // Setter for name attr
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Below method returns attributes in a specific format
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
