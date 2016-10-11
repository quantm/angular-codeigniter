var app = angular.module('main-App', ['ngRoute','toaster']);
app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'resource/home',
                    controller: 'MainCrtl'
                }).
                when('/student', {
                    templateUrl: 'resource/student',
                    controller: 'StdCtrl'

                }).
                otherwise({
                    templateUrl: 'resource/404'
                });

    }]);


