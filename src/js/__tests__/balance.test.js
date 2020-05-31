import Balance from '../balance';
import Daemon from '../daemon';
import Magician from '../magician';

describe('Daemon:', () => {
  test('should attack with default attack if not stoned and locate near the enemy', () => {
    const daemon = new Daemon('Daemon');
    daemon.stoned = 0;
    daemon.distance = 1;
    expect(daemon.attack).toBe(25);
  });
  test('should attack with default attack if stoned and locate near the enemy', () => {
    const daemon = new Daemon('Daemon');
    daemon.stoned = 1;
    daemon.distance = 1;
    expect(daemon.attack).toBe(25);
  });
  test('should have reduced attack if not stoned and locate far from the enemy', () => {
    const daemon = new Daemon('Daemon');
    daemon.stoned = 0;
    daemon.distance = 2;
    expect(daemon.attack).toBe(22.5);
  });
  test('should have more reduced attack if stoned and locate far from the enemy', () => {
    const daemon = new Daemon('Daemon');
    daemon.stoned = 1;
    daemon.distance = 2;
    expect(daemon.attack).toBe(17.5);
  });
});
describe('Magician:', () => {
  test('should attack with default attack if not stoned and locate near the enemy', () => {
    const mage = new Magician('Mage');
    mage.stoned = 0;
    mage.distance = 1;
    expect(mage.attack).toBe(40);
  });
  test('should attack with default attack if stoned and locate near the enemy', () => {
    const mage = new Magician('Mage');
    mage.stoned = 1;
    mage.distance = 1;
    expect(mage.attack).toBe(40);
  });
  test('should have reduced attack if not stoned and locate far from the enemy', () => {
    const mage = new Magician('Mage');
    mage.stoned = 0;
    mage.distance = 4;
    expect(mage.attack).toBe(28);
  });
  test('should have more reduced attack if stoned and locate far from the enemy', () => {
    const mage = new Magician('Mage');
    mage.stoned = 1;
    mage.distance = 4;
    expect(mage.attack).toBe(18);
  });
});
describe('Balance:', () => {
  test('should create new Class, not usable, only for heritance', () => {
    const forTest = new Balance();
    expect(forTest).toEqual({ _stoned: 0, _attack: 0, distance: 1 });
  });
  test('should thtrow error if Balance.stoned differs from 0 or 1', () => {
    const forTest = new Balance();
    expect(() => {
      forTest.stoned = 3;
    }).toThrow();
  });
});
