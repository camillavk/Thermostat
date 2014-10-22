describe('thermostat', function() {

	var thermostat

	describe('by default', function() {

		it('it is set to 20 degrees', function() {
			thermostat = new Thermostat
			expect(thermostat.temperature).toEqual(20)
		});

	});

});