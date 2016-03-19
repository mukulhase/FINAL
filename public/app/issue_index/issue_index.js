'use strict';

angular.module('myApp.issue_index', ['ngRoute'])
    .controller('IssueIndex', ['$routeParams', '$http', '$scope', '$rootScope', '$auth', '$resource', function ($routeParams, $http, $scope, $rootScope, $auth, $resource) {
        $scope.comments = [];

        var comments = $resource('/comments');
        var issue = $resource('/issues');
        var issues_comments =$resource('/issues/comment/:id.json',{id:$routeParams.param1});
        function refresh() {
            issues_comments.query(function (data) {
                console.log($scope.comments);
                for (var i = 0; i < data.length; i++) {
                    var flag = 0;
                    for (var j = 0; j < $scope.comments.length; j++) {
                        if ($scope.comments[j].id == data[i].id) {
                            flag++;
                            break;
                        }
                    }
                    if (flag == 0) {
                        $scope.comments.push(data[i]);
                    }
                }
            });
        }
        $scope.issueID = $routeParams.param1;
        $scope.addComment = function () {
            var comment = $resource('/comments');
            var newcomment = new comment({issue_id: $scope.issueID, Content: $scope.newcommentname});
            newcomment.$save();
            refresh();
        };
        refresh();
        setInterval(refresh,5000);

    }]);
