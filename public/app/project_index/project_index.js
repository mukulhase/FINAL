'use strict';

angular.module('myApp.project_index', ['ngRoute'])
    .controller('ProjectIndex', ['$routeParams', '$http', '$scope', '$rootScope', '$auth', '$resource', function ($routeParams, $http, $scope, $rootScope, $auth, $resource) {
        $scope.issues = [];

        var Issues = $resource('/issues');
        var Project = $resource('/projects');
        var Projects_Issues =$resource('/projects/issue/:id.json',{id:$routeParams.param1});
        function refresh() {
            Projects_Issues.query(function (data) {
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
            var Issue = $resource('/issues');
            var newissue = new Issue({project_id: $scope.ProjectID, Title: $scope.newissuename , Assignee: $rootScope.user.id});
            newissue.Description=$scope.issueDescription;
            newissue.$save();
            refresh();
        };
        refresh();
        setInterval(refresh,5000);
        $scope.updateDescription= function(){
            var ProjectInstance = $resource('/projects/:ID.json',{ID:$scope.ProjectID});
            var project = ProjectInstance.get({ID:$scope.ProjectID}, function() {
                ProjectInstance.Description=$scope.projectDescription;
                project.$save();
            });
        };
    }]);
