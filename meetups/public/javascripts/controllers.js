var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('speakerListController', ['$scope', '$http', function ($scope, $http) {
    $scope.class = 'speakerlist';
    $http.get('/data.json').then(function(res){
        $scope.artists = res.data.speakers;
        $scope.home = true;
    }, function(result) {
        console.log('http request failed with result: ' + res);
    });
}]);
