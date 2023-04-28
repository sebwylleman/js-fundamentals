class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaver = true;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    this.temperature += 1;
  }
  down() {
    if (this.temperature <= 10) {
      return 'Minimum temperature reached, can not decrease';
    } else {
      this.temperature -= 1;
    }
  }
}

module.exports = Thermostat;
