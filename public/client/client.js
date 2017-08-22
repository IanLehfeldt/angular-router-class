var app = angular.module('ColorApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '../views/home.html'
    }).when('/red', {
        templateUrl: '../views/red.html',
        controller: 'RedController as vm'
    }).when('/yellow', {
        templateUrl: '../views/yellow.html',
        controller: 'YellowController'
    }).when('/blue', {
        templateUrl: '../views/blue.html',
        controller: 'BlueController',
        controllerAs: 'vm'
    }).when('/green', {
        templateUrl: '../views/green.html',
        controller: 'GreenController',
        controllerAs: 'vm'
    });
}]);