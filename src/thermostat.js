function Thermostat() {
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemperature = 10;
	this.maxTemperature = 25;
	this.displayColour = "yellow"
}

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
	if (this.temperature > this.maxTemperature) {
		return new Error("That's too hot!")
	}
	if (this.temperature >= 25) {
		this.displayColour = "red"
	}
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
	if (this.temperature < this.minTemperature) {
		return new Error("That's too cold!")
	}
	if (this.temperature < 18) {
		this.displayColour = "green"
	}
	else return this.temperature
};

Thermostat.prototype.turnPowerSaverOff = function() {
	this.isPowerSaverOn = false;
	this.maxTemperature = 32;
};

Thermostat.prototype.turnPowerSaverOn = function() {
	this.isPowerSaverOn = true
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = 20;
};
