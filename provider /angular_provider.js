angular.module('myApp').controller("HostCtrl", function(){
	$scope.host = "TT";
});
/*
.provider("hostService", function(){
	this.$get = function(){
		var host = { 
			hostname : "AppServer",
			ip : "192.168.12.15"
		}
		return{
			serverip : function(){
				return host.ip;
			},
			servername : function(){
				return host.hostname
			}

		}
	}
}).controller("HostCtrl",["$scope", "hostService", function($scope, hostService){
	$scope.host  = hostService.host;
}]);
*/