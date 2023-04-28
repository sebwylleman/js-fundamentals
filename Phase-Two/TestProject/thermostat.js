class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaver = true;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    if (this.powerSaver === true && this.temperature === 25) {
      return 'Maximum temperature reached for power saving mode';
    } else {
      this.temperature += 1;
    }
  }
  down() {
    if (this.temperature === 10) {
      return 'Minimum temperature reached, can not decrease';
    } else {
      this.temperature -= 1;
    }
  }
  setPowerSavingMode(boolean) {
    if (!boolean) {
      this.powerSaver = false;
    }
  }
}

module.exports = Thermostat;
