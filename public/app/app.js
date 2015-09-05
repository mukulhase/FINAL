'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ipCookie',
  'ngRoute',
  'ng-token-auth',
  'myApp.signin',
  'myApp.signup',
  'myApp.version',
  'myApp.user_index'
]).
config(['$routeProvider', function($routeProvider){
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
      .otherwise({
        redirectTo: '/'
      });
}]).
run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function() {
        console.log($rootScope.user)
        $location.path('/');

    });
}]);