angular.module('ConfWorker',[])
.config(function($provide){
	$provide.provider("host", function(){
		return{
			$get: function(){
			return{
				hostname : "appServer",
				ip: "10.10.150.23"
			};		
		}
	};
	});
} ).controller("ProCtrl", function($scope, host ){
	    $scope.hostname = host.hostname;
	    $scope.ip = host.ip;
});
    
angular.module('AppWorker', ['ConfWorker']).
controller("AppCtrl", ["$scope", "host",function($scope, host){
	$scope.hostname = host.hostname;
	$scope.ip = host.ip;
}]);