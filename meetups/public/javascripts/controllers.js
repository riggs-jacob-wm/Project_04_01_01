var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('speakerListController', ['$scope', '$http', function ($scope, $http) {

    $http.get('data.json')
        .then(function (response) {
            $scope.artists = response.data;
        }, function(result) {
            console.log('http request failed with result: ' + result)
        });
}]);
//
//artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
//
//    $http.get('js/data.json')
//        .then(function (response) {
//            $scope.artists = response.data;
//            $scope.whichItem = $routeParams.itemId;
//
//            // set a $scope var for next and prev array items
//            if ($routeParams.itemId > 0) {
//                $scope.prevItem = Number($routeParams.itemId) - 1;
//            } else {
//                $scope.prevItem = $scope.artists.length - 1;
//            }
//            if ($routeParams.itemId < $scope.artists.length - 1) {
//                $scope.nextItem = Number($routeParams.itemId) + 1;
//            } else {
//                $scope.nextItem = 0;
//            }
//        }, function(result) {
//            console.log('http request failed with result: ' + result)
//        });
//}]);
//
//artistControllers.controller('ApplyController', ['$scope',
//    function($scope) {
//        $scope.apply = function() {
//            $scope.message = 'Thank you for applying, ' + $scope.user.name;
//        }
//    }]);
//
//artistControllers.controller('SuccessController', ['$scope',
//    function($scope) {
//        $scope.success = function() {
//            $scope.message = 'Thank you very much for your application, ' + $scope.user.name;
//        }
//    }]);
