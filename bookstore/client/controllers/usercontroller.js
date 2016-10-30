var user=angular.module("Books",[]);
console.log("User Controller");
user.controller("usercontroller",['$http','$scope',function($http,$scope){
	console.log("User Controller");
	$scope.load=function(){
		console.log("Fourth Commit");
	}
}]);