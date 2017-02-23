angular.module('BasisModule', []).
value('basisName', "BasisModule").
constant('c', {"name": "Hans", "beruf" : "Maurer"}).
constant('name', "Hans").
constant('func', function(){return "Das geht"}).
factory('myService', ['c', 'func',function(c, func){
  return{

  serviceFunc1 : function(){
    return "Value: Test" ;
  },
  serviceFunc2 : function(){
    return "Const: " + c.name + " " + c.beruf + " " + func();
  }
}
}]);

angular.module('WorkModule', ['BasisModule']).
controller('ControllerEins', ['$scope','myService','basisName', function($scope, myService, basisName){
  $scope.myService = myService;
  $scope.basisName = basisName;
  console.log(myService);
  console.log(myService.serviceFunc1() + " " + basisName);

}]);
