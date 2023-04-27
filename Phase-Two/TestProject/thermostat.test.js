const Thermostat = require('./thermostat');
const myThermostat = new Thermostat();

describe('Thermostat', () => {
  it('returns an initial temperature of 20', () => {
    expect(myThermostat.getTemperature()).toEqual(20);
  });
});
