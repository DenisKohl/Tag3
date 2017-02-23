angular.module('myApp',[])
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
	$scope.hostip  = hostService.serverip;
	$scope.hostname  = hostService.servername;
}]);


angular.module("AppWorker",['myApp'])
.controller("WorkerCtrl", ["$scope","hostService", function($scope,hostService){
	$scope.hostip  = hostService.serverip;
	$scope.hostname  = hostService.servername;
}]);


angular.module('myConfApp',[])
.provider("hostService", function(){
	var host = { 
			hostname : "AppServer",
			ip : "192.168.12.15"
	}
	this.init = function(hostname, ip){
		host.hostname = hostname;
		host.ip = ip;	
	};
	this.$get = function(){
		
		return{
			serverip : function(){
				return host.ip;
			},
			servername : function(){
				return host.hostname
			}

		}
	}
})
.controller("HostCtrl",["$scope", "hostService", function($scope, hostService){
	console.log(hostService);
	$scope.hostip  = hostService.serverip;
	$scope.hostname  = hostService.servername;
}]).config(function(hostServiceProvider){
	hostServiceProvider.init("WebServer", "80.154.193.223"); //Ganz wichtig... Provider werden immer mit dem Wort Provider ergänzt
});
