export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // getter for brand attr
  get brand() {
    return (this._brand);
  }

  // setter for brand attr
  set brand(value) {
    this._brand = value;
  }

  // getter for motor attr
  get motor() {
    return (this._motor);
  }

  // setter for motor attr
  set motor(value) {
    this._motor = value;
  }

  // getter for color attr
  get color() {
    return (this._color);
  }

  // setter for color attr
  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return (this);
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
