'use strict';

angular.module('myApp.user_index', ['ngRoute'])
.controller('UserIndex', ['$http', '$scope', '$rootScope', '$auth', '$resource', function ($http, $scope, $rootScope, $auth, $resource) {
        $scope.projects=[];
        var Project = $resource('/projects');
        if(!$rootScope.user.id){
            location.reload();
        }
        var Users_Projects =$resource('/user/:id.json',{id:$rootScope.user.id});
        function refresh(){
            Users_Projects.query(function(data){
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
                for(var i=0;i<$scope.projects.length;i++){
                    var flag=0;
                    for (var j=0;j<data.length;j++){
                        if($scope.projects[j].id==data[i].id){
                            flag++;
                            break;
                        }
                    }
                    if(flag==0){
                        $scope.projects.splice(i,1);
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
