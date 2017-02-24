var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/homeinfo', {
        templateUrl : "partials/template/home.ejs",
        controller  : "speakerListController"
    }).
    when('/speakers', {
        templateUrl : "partials/speakers.ejs"
    }).
        otherwise({
           redirectTo: '/homeinfo'
        });
}]);