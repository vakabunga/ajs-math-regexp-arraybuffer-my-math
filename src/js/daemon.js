import Balance from './balance';

export default class Daemon extends Balance {
  constructor(name) {
    super();
    this.name = name;
    this.attack = 25;
  }
}

const vaka = new Daemon('vaka');
console.log(`vaka's attack = ${vaka.attack}`);
vaka.stoned = 1;
console.log(`vaka's attack = ${vaka.attack}`);
vaka.distance = 2;
console.log(`vaka's attack = ${vaka.attack}`);
