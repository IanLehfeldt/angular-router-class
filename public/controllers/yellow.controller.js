app.controller('YellowController', ['$scope', function($scope){
    $scope.something = 'This is something from yellow controller!';
    //Scope isnt as explicit about your angular code, use self.something instead
}]);