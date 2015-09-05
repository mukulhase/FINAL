'use strict';

angular.module('myApp.project_index', ['ngRoute'])
.controller('ProjectIndex', ['$routeParams' ,'$http', '$scope', '$rootScope', '$auth', '$resource', function ($routeParams, $http, $scope, $rootScope, $auth, $resource) {
        $scope.addIssue = function() {
            var Issue = $resource('/issue');
            var newissue = new Issue({owner_id:$rootScope.user.id,Name:$scope.newissuename});
            newissue.$save();
        };
        $http({ method: 'GET', url: '/issue/'+$routeParams.param1}).then(function (data, status, headers, config) {
                console.log(data);
                $scope.projects=data.data
            });
}]);
