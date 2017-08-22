app.controller('RedController', ['ThingsService', function(ThingsService){
    // ^^ We're required in the ThingsService we made on the service.js like a dependency and theeeen ..
    var self = this;

    self.message = "Red is ferocious";
    //self.whatever = ThingsService.redThings;
    //Call it whatever we would like to call it so the vm can recognize it.

    ThingsService.getRedThings();
    self.redThings = ThingsService.redThings;
}]);