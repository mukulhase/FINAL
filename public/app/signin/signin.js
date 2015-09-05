'use strict';

angular.module('myApp.signin', ['ngRoute'])
.controller('Signin', ['$scope', function ($scope) {
  $scope.$on('auth:login-error', function(ev, reason) {
    $scope.error = reason.errors[0];
    
  });
}]);