import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // getter for range attr
  get range() {
    return (this._range);
  }

  // setter for range attr
  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
