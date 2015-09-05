'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ipCookie',
  'ngRoute',
  'ng-token-auth',
  'ui-compat',
  'myApp.signin',
  'myApp.signup',
  'myApp.version',
  'myApp.user_index'
]).
config([ '$stateProvider', '$routeProvider', function( $routeProvider, $stateProvider){
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

        $stateProvider
            // this state will be visible to everyone
            .state('index', {
                url: '/',
                templateUrl: 'index.html',
                controller: 'IndexCtrl'
            })

            // only authenticated users will be able to see routes that are
            // children of this state
            .state('user_index', {
                url: '/user_index',
                abstract: true,
                template: '<ui-view/>',
                resolve: {
                    auth: function($auth) {
                        return $auth.validateUser();
                    }
                }
            })

        // this route will only be available to authenticated users
        /*.state('admin.dashboard', {
         url: '/dash',
         templateUrl: '/admin/dash.html',
         controller: 'AdminDashCtrl'
         });*/
}, ]).
run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function() {
        console.log($rootScope.user)
        $location.path('/');

    });
}]);
