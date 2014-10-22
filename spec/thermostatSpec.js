"use strict";
describe('thermostat', function() {

	var thermostat

	beforeEach(function() {
		thermostat = new Thermostat
	});

	describe('by default', function() {

		it('it is set to 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20)
		});

		it('power saving mode will be on', function() {
			expect(thermostat.isPowerSaverOn).toBe(true)
		});

		it('it can increase the temperature by 1 degree', function() {
			thermostat.increaseTemperature()
			expect(thermostat.temperature).toEqual(21)
		});

		it('it can decrease the temperature by 1 degree', function() {
			thermostat.decreaseTemperature()
			expect(thermostat.temperature).toEqual(19)
		});

		it('has a minimum temperature of 10 degrees', function() {
			expect(thermostat.minTemperature).toEqual(10)
		});

		it('cannot go below the minimum temperature', function() {
			expect(thermostat.decreaseTemperatureBy(11)).toEqual(new Error("That's too cold!"))
		});

		it('cannot go above the maximum temperature', function() {
			expect(thermostat.increaseTemperatureBy(10)).toEqual(new Error("That's too hot!"))
		});

		it('if power saving mode is on the max temp is 25', function() {
			expect(thermostat.maxTemperature).toEqual(25)
		});

		it('it can reset the temperature to 20', function() {
			thermostat.increaseTemperatureBy(5)
			thermostat.resetTemperature()
			expect(thermostat.temperature).toEqual(20)
		});

	});

	describe('custom features', function() {

		it('it can increase the temperature by 5 degrees', function() {
			thermostat.increaseTemperatureBy(5)
			expect(thermostat.temperature).toEqual(25)
		});

		it('it can decrease the temperature by 5 degrees', function() {
			thermostat.decreaseTemperatureBy(5)
			expect(thermostat.temperature).toEqual(15)
		});

		it('it can turn of the power saving mode', function() {
			thermostat.turnPowerSaverOff()
			expect(thermostat.isPowerSaverOn).toBe(false)
		});

		it('if power saving mode is off, the max temp is 32', function() {
			thermostat.turnPowerSaverOff()
			expect(thermostat.maxTemperature).toEqual(32)
		});

		it('cannot go above the maximum temperature', function() {
			expect(thermostat.increaseTemperatureBy(15)).toEqual(new Error("That's too hot!"))
		});

	});

	describe('display features', function() {

		it('should be yellow if the temperature is 20', function() {
			expect(thermostat.displayColour).toEqual("yellow")
		});

		it('should be green if the temperature is below 18', function() {
			thermostat.decreaseTemperatureBy(3)
			expect(thermostat.displayColour).toEqual("green")
		});

		it('should be red if the temperature is above 25', function() {
			thermostat.increaseTemperatureBy(5)
			expect(thermostat.displayColour).toEqual("red")
		});

	});

});