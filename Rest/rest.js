angular.module("RestTest",['ngResource']).
factory("GetData", ['$resource',function($resource){
	return $resource("http://127.0.0.1:30000/json",{},{
		query:{method: 'GET', isArray: false}
	});
}]).controller("DataCtrl", ['$scope', 'GetData' ,function($scope, GetData){
	GetData.query(function(data){
		console.log(data);
		$scope.name = data.name;
		$scope.beruf = data.beruf;
	});
}]);

angular.module('HttpTest',[]).
controller('httpCtrl', function($scope,$http){
	$http.get("http://127.0.0.1:30000/json").
	then(function(res){
		if(res.status != 200){
			alert("Http Fehler");
		}
		console.log(res);
		$scope.daten = res.data;
	}, function(res){
		if(res.status != 200){
			alert("Http Fehler");
			console.log(res);
		}
	});
});


angular.module('HttpFactory', []).
factory("httpFab",["$http", function($http){
	return{
		getData : function(){
			return $http.get("http://127.0.0.1:30000/json");
			
		}
	}
}]).controller("getHttpCtrl", ["$scope","httpFab", function($scope,httpFab){
	var req = httpFab.getData();
	req.then(function(res){
		console.log(res);
		$scope.daten = res.data;
	},function(res){
		alert("Alles doof ohne http");
	});
}]);