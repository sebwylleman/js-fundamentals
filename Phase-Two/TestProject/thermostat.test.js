const Thermostat = require('./thermostat');
const myThermostat = new Thermostat();

describe('Thermostat', () => {
  beforeEach(() => {
    this.temperature = 20;
    // add more as you go
  });
  it('returns an initial temperature of 20', () => {
    expect(myThermostat.getTemperature()).toEqual(20);
  });
  it('increases the temperature by 1 whenever up() is called', () => {
    myThermostat.up();
    expect(myThermostat.getTemperature()).toEqual(21);
  });
  it('decreases the temperature by 1 whenever down() is called', () => {
    myThermostat.down();
    myThermostat.down();
    expect(myThermostat.getTemperature).toEqual(20);
  });
});
