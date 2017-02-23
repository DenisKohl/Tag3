angular.module("AufMod",[])
.factory('dataFab', function(){
	var daten = [];
	return{
		addData : function(val){
			daten.push(val);
		},
		getData : function(){
			return [].concat(daten);
		}
	}
}).controller('eingabeEins', ['$scope', 'dataFab',function($scope, dataFab){
	$scope.addVal = function(){
		dataFab.addData($scope.val);
	}
}]).controller('eingabeZwei', ['$scope', 'dataFab',function($scope, dataFab){
	$scope.addVal = function(){
		dataFab.addData($scope.val);
	}
}]).controller('ausgabe', ['$scope', 'dataFab', function($scope, dataFab){
	$scope.liste = dataFab.getData;
}]).controller('httpCtrl', function($scope, $http, dataFab){
	$http.get("http://127.0.0.1:30000/array").
	then(function(res){
		if(res.status != 200){
			alert("Http Fehler");
		}
		console.log(res);
		
		$scope.daten = res.data;
		
		for(var i = 0; i < $scope.daten.arr.length; i++){
			dataFab.addData($scope.daten.arr[i]);
		}
	}, function(res){
		if(res.status != 200){
			alert("Http Fehler");
			console.log(res);
		}
	});
});
