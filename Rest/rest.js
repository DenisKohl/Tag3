angular.module("RestTest",['ngResource']).
factory("GetData", ['$resource',function($resource){
	return $resource("http://127.0.0.1:30000/json",{},{
		query:{method: 'GET', isArray: false}
	});
}]).controller("DataCtrl", ['$scope', 'GetData' ,function($scope, GetData){
	GetData.query(function(data){
		$scope.name = data.name;
		$scope.beruf = data.beruf;
	});
}]);