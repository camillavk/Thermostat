function ThermostatView(element) {
     this.element = $(element);
     this.thermostat = new Thermostat;
     this.element.text(this.thermostat.temperature);
     this.bindTo('.increase_temperature', this.thermostat, this.thermostat.increaseTemperature);
     this.bindTo('.decrease_temperature', this.thermostat, this.thermostat.decreaseTemperature);
     this.bindTo('.reset_temperature', this.thermostat, this.thermostat.resetTemperature);
};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
     $(selector).on('click', function() {
          console.log($('.temperature h1').text(func.call(obj)));
     });
};

$(document).ready(function() {
     new ThermostatView('.temperature h1');
});

