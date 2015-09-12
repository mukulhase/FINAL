'use strict';

angular.module('myApp.project_index', ['ngRoute'])
    .controller('ProjectIndex', ['$routeParams', '$http', '$scope', '$rootScope', '$auth', '$resource', function ($routeParams, $http, $scope, $rootScope, $auth, $resource) {
        $scope.issues = [];

        var Issues = $resource('/issues');
        var Project = $resource('/projects');

        function refresh() {
            Issues.query(function (data) {
                console.log($scope.issues);
                for (var i = 0; i < data.length; i++) {
                    var flag = 0;
                    for (var j = 0; j < $scope.issues.length; j++) {
                        if ($scope.issues[j].id == data[i].id) {
                            flag++;
                            break;
                        }
                    }
                    if (flag == 0) {
                        $scope.issues.push(data[i]);
                    }
                }
            });
        }

        $scope.ProjectID = $routeParams.param1;
        $scope.addIssue = function () {
            var Issue = $resource('/issue');
            var newissue = new Issue({owner_id: $rootScope.user.id, Name: $scope.newissuename});
            newissue.$save();
        };
        $http({method: 'GET', url: '/issue/' + $routeParams.param1}).then(function (data, status, headers, config) {
            console.log(data);
            $scope.issues = data.data;
        });
    }]);
