'use strict';

angular.module('myApp.signup', ['ngRoute'])
.controller('Signup', ['$scope', '$auth', function ($scope, $auth) {
  $scope.$on('auth:registration-email-error', function(ev, reason) {
    $scope.error = reason.errors[0];
  });
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm).then(function() {
      $auth.submitLogin({
        email: $scope.registrationForm.email,
        password: $scope.registrationForm.password
      });
    });
  };
}]);