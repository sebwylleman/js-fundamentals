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
  xit('logs a can not decrease message when trying to decrease temperature to less than 10', () => {
    this.temperature = 10;
    expect(myThermostat.down()).toEqual(
      'Minimum temperature reached, can not decrease'
    );
  });
});
