function Thermostat() {
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemperature = 10;
	this.maxTemperature = 25;
}

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
	if (this.temperature < this.minTemperature) {
		throw new Error("That's too cold!")
	}
	return this.temperature
};

Thermostat.prototype.turnPowerSaverOff = function() {
	this.isPowerSaverOn = false;
	this.maxTemperature = 32;
};


// Thermostat.prototype.maxTemperature = function() {
// 	if (this.isPowerSaverOn = false) {
// 		this.maxTemperature += 7
// 	}
	// else if (this.isPowerSaverOn = false) {
	// 	this.maxTemperature = 32
	// }
