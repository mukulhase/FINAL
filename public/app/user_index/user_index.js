'use strict';

angular.module('myApp.user_index', ['ngRoute'])
.controller('UserIndex', ['$scope', '$rootScope', '$auth', '$resource', function ($scope, $rootScope, $auth, $resource) {
        $scope.addProject = function() {
            var Project = $resource('/projects');
            var newproject = new Project({owner_id:$rootScope.user.id,Name:$scope.newprojectname});
            newproject.$save();
        }

}]);
