import Currency from './3-currency'; // eslint-disable-line

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount attr
  get amount() {
    return this._amount;
  }

  // Setter for amount attr
  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter for currency attr
  get currency() {
    return this._currency;
  }

  // Setter for currency attr
  set currency(newCurrency) {
    if (typeof newCurrency === 'number') {
      this._currency = newCurrency;
    } else {
      throw new Error('Currency must be an instance of the Currency class');
    }
  }

  // Below method returns attributes in a specific format
  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  // Below static method converts price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return (amount * conversionRate);
    }
    throw new TypeError('Amount & conversion rate must be numbers');
  }
}
