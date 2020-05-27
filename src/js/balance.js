/* eslint-disable no-underscore-dangle */
export default class Balance {
  constructor() {
    this._stoned = 0;
    this._attack = 0;
    this.distance = 1;
  }

  set stoned(value) {
    if (value === 1 || value === 0) {
      this._stoned = value;
    }
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    if (this.stoned === 0) {
      return this._attack * (1 - (this.distance - 1) / 10);
    }
    return this._attack - Math.log2(this.distance) * 5;
  }
}
