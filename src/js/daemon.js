import Balance from './balance';

export default class Daemon extends Balance {
  constructor(name) {
    super();
    this.name = name;
    this.attack = 25;
  }
}
