function Thermostat() {
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemperature = 10;
	this.maxTemperature = 25;
	this.displayColour = "yellow"
}

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if (this.temperature >= this.maxTemperature) {
		alert("That's too hot!")
		return this.maxTemperature
	}
	this.temperature = this.temperature + degrees;
	return this.temperature
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if (this.temperature <= this.minTemperature) {
		alert("That's too cold!")
		return this.minTemperature
	}
	this.temperature = this.temperature - degrees;
	return this.temperature
};

Thermostat.prototype.changeColour = function() {
	if (this.temperature >= 25) {
		this.displayColour = "red"
	}
	if (this.temperature < 18) {
		this.displayColour = "green"
	}
};

Thermostat.prototype.turnPowerSaverOff = function() {
	this.isPowerSaverOn = false;
	this.maxTemperature = 32;
};

Thermostat.prototype.turnPowerSaverOn = function() {
	this.isPowerSaverOn = true
};

Thermostat.prototype.resetTemperature = function() {
	return this.temperature = 20;
};
