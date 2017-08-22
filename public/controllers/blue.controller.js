app.controller('BlueController', ['ThingsService', function (ThingsService){
    var self = this;
    self.message = "Blue is chill";
    ThingsService.getBlueThings();
}]);