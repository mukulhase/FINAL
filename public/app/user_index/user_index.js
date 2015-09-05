'use strict';

angular.module('myApp.user_index', ['ngRoute'])
.controller('UserIndex', ['$scope', '$auth', '$resource', function ($scope, $auth, $resource) {
        var User = $resource('/user/:userId', {userId:'@id'});
        var user = User.get({userId:0}, function() {
            $scope.A1=user.Name;

            user.$save();
        });
}]);
