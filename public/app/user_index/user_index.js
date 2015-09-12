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
        $scope.removeProject=function(id){
            console.log("Deleting ID:"+id.id);
            for(var index=0; index<$scope.projects.length; index++){
                if($scope.projects[index].id==id.id){
                    break;
                }
            }
            var ProjectInstance = $resource('/projects/:ID.json',{ID:id.id});
            var project = ProjectInstance.get({ID:id.id}, function() {
                project.$delete();
            });
            $scope.projects.splice(
                index,
                1
            );
        };
        $scope.addProject = function() {
            var newproject = new Project({owner_id:$rootScope.user.id,Name:$scope.newprojectname});
            try{
                newproject.$save();
            }catch(error){
                console.log("");
            }
            refresh();
        };
        refresh();
        setInterval(refresh,5000);

}]);
