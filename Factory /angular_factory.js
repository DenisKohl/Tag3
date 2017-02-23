var app = angular.module("FactoryTest",[])
.factory("useFactory", function(){
	var meineListe = [];
	return {
		values : function(){
			return [].concat(meineListe);
		},
		addValue: function(value){
			meineListe.push(value);
			console.log(meineListe);
		}
	}
})
.controller('formController', ['$scope', 'useFactory', function($scope, useFactory ){
	$scope.addValue = function(){
		useFactory.addValue($scope.val);
	}
}])
.controller('showValuesController', ['$scope', 'useFactory', function($scope, useFactory ){
	$scope.values = useFactory.values;
}]);