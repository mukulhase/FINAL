'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'wu.masonry',
    'ipCookie',
    'ngRoute',
    'ng-token-auth',
    'ngResource',
    'myApp.signin',
    'myApp.signup',
    'myApp.version',
    'myApp.project_index',
    'myApp.user_index',
    'myApp.issue_index'
]).
    config(['$routeProvider', function ($routeProvider, $stateProvider) {
        $routeProvider
            .when('/sign_in', {
                templateUrl: 'signin/signin.html',
                controller: 'Signin'
            })
            .when('/sign_up', {
                templateUrl: 'signup/signup.html',
                controller: 'Signup'
            })
            .when('/user_index', {
                templateUrl: 'user_index/user_index.html',
                controller: 'UserIndex'
            })
            .when('/project_index/:param1', {
                templateUrl: 'project_index/project_index.html',
                controller: 'ProjectIndex'
            })
            .when('/issue_index/:param1', {
                templateUrl: 'issue_index/issue_index.html',
                controller: 'IssueIndex'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]).
    run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.$on('auth:login-success', function () {
            console.log($rootScope.user);
            $location.path('/user_index');

        });
    }]);
