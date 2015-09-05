'use strict';

angular.module('myApp.user_index', ['ngRoute'])
.controller('UserIndex', ['$http', '$scope', '$rootScope', '$auth', '$resource', function ($http, $scope, $rootScope, $auth, $resource) {
        $scope.addProject = function() {
            var Project = $resource('/projects');
            var newproject = new Project({owner_id:$rootScope.user.id,Name:$scope.newprojectname});
            newproject.$save();
        };
        $http({ method: 'GET', url: '/user/'+$rootScope.user.id}).then(function (data, status, headers, config) {
                console.log(data);
                $scope.projects=data.data
            });

}]);
