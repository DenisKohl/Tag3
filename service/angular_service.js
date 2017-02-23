angular.module('BasisModule', []).
value('basisName', "BasisModule").
constant('c', "Ich bleibe").
service('myService', function(){
  return{

  serviceFunc1 : function(){
    return "Value: Test" ;
  },
  serviceFunc2 : function(){
    return "Const: " + c;
  }
}
});

angular.module('WorkModule', ['BasisModule']).
controller('ControllerEins', ['$scope','myService','basisName', function($scope, myService, basisName){
  $scope.myService = myService;
  $scope.basisName = basisName;
  console.log(myService);
  console.log(myService.serviceFunc1() + " " + basisName);

}]);
