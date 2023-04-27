const Thermostat = require('./thermostat');
const myThermostat = new Thermostat();

describe('Thermostat', () => {
  it('returns an initial temperature of 20', () => {
    expect(myThermostat.getTemperature()).toEqual(20);
  });
  it('increases the temperature by 1 whenever up() is called', () => {
    myThermostat.up();
    expect(myThermostat.getTemperature()).toEqual(21);
  });
});
