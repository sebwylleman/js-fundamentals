const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  let myThermostat;

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
  it('verifies that the power saving mode is on by default', () => {
    expect(myThermostat.powerSaver).toEqual(true);
  });
  it('does not allow the temperature to be increased past 25 if powerSaver mode is enabled', () => {
    myThermostat.setPowerSavingMode(true);
    for (let i = 0; i < 5; i++) {
      myThermostat.up();
    }
    expect(myThermostat.getTemperature()).toEqual(25);
    expect(myThermostat.up()).toEqual(
      'Maximum temperature reached for power saving mode'
    );
  });
  it('turns power saving mode off', () => {
    myThermostat.setPowerSavingMode(false);
    expect(myThermostat.powerSaver).toEqual(false);
  });
});
