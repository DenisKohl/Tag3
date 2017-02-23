angular.module('ConfWorker',[])
.config(function($provide){
	$provide.provider("$host", function(){
		return{
			$get: function(){
			return{
				hostname : "appServer",
				ip: "10.10.150.23",
				name: "Tom"
			};		
		}
	};
	});
} ).controller("ProCtrl",[ "$scope", "$host",function($scope, host ){
	    $scope.hostname = host.hostname;
	    $scope.ip = host.ip;
	    $scope.n = host.name;
}]);
    
angular.module('AppWorker', ['ConfWorker']).
controller("AppCtrl", ["$scope", "$host",function($scope,h){
	$scope.hostname = h.hostname;
	$scope.ip = h.ip;
	$scope.n = h.name;
}]);