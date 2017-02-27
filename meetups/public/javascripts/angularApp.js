var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers',
    'ngSanitize'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
        templateUrl : "partials/template/home.ejs",
        controller  : "speakerListController"
    }).
    when('/speakers', {
        templateUrl : "partials/template/speakers.ejs",
        controller  : "speakersController"
    }).
    when('/speakers/:speakerid', {
        templateUrl : "partials/template/speakers.ejs",
        controller  : "speakersDetailsController"
    }).
        otherwise({
           redirectTo: '/home'
        });
}]);