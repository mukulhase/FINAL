'use strict';

angular.module('myApp.user_index', ['ngRoute'])
.controller('UserIndex', ['$http', '$scope', '$rootScope', '$auth', '$resource', function ($http, $scope, $rootScope, $auth, $resource) {
        $scope.projects=[];
        var Project = $resource('/projects');
        function refresh(){
            Project.query(function(data){
                console.log($scope.projects);
                for(var i=0;i<data.length;i++){
                    var flag=0;
                    for (var j=0;j<$scope.projects.length;j++){
                        if($scope.projects[j].id==data[i].id){
                            flag++;
                            break;
                        }
                    }
                    if(flag==0){
                        $scope.projects.push(data[i]);
                    }
                }
            });
        }
        $scope.addProject = function() {
            var newproject = new Project({owner_id:$rootScope.user.id,Name:$scope.newprojectname});
            try{
                newproject.$save();
            }catch(error){
                console.log("");
            }
            refresh();
        };
        setInterval(refresh,5000);

}]);
