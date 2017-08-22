app.service('ThingsService', ['$http', function ($http) {
    var self = this;

    self.redThings = {
        list: []
    };

    self.getRedThings = function () {
        $http({
            method: 'GET',
            url: '/redthings'
        }).then(function (response) {
            console.log(response.data);
            self.redThings.list = response.data;
        });
    };

    // self.getRedThings();

    self.getBlueThings = function () {
        $http({
            method: 'GET',
            url: '/bluethings'
        }).then(function (response) {
            console.log(response.data);
        });
    };

    // self.getBlueThings();
}]);
//We created our service that holds the things and we'll require it on our controller
//Like how controllers need $http to work, like a dependencies