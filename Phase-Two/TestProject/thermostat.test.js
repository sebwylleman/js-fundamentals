const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  let myThermostat; // find out why we declare without initialising anything

  beforeEach(() => {
    myThermostat = new Thermostat();
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
    expect(myThermostat.getTemperature()).toEqual(18);
  });
  it('does not allow the temperature to be decreased past 10', () => {
    for (let i = 0; i < 10; i++) {
      myThermostat.down();
    }
    expect(myThermostat.getTemperature()).toEqual(10);
    expect(myThermostat.down()).toEqual(
      'Minimum temperature reached, can not decrease'
    );
  });
});
