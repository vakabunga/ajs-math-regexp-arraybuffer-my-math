import Balance from './balance';

export default class Magician extends Balance {
  constructor(name) {
    super();
    this.name = name;
    this.attack = 40;
  }
}
