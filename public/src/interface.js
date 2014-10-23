function ThermostatView(element) {
     this.element = $(element);
     this.thermostat = new Thermostat;
     this.element.text('Thermostat temperature: ' + this.thermostat.temperature + 'C');
     this.bindTo('.increase_temperature', this.thermostat, this.thermostat.increaseTemperature);
     this.bindTo('.decrease_temperature', this.thermostat, this.thermostat.decreaseTemperature);
     this.bindTo('.reset_temperature', this.thermostat, this.thermostat.resetTemperature);
};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
     $(selector).on('click', function() {
          $('.temperature h2').text('Thermostat temperature: ' + func.call(obj) + 'C');
     });
};



