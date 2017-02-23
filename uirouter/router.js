angular.module('UI-Test', ['ui.router']).
config(function($stateProvider){
	var einsState = {
		name: 'eins',
		url: '/eins',
		template: '<h2>Seite eins</h2>'
	}
	var zweiState = {
		name: 'zwei',
		url: '/zwei',
		templateUrl: './zwei.html'
	}
	var dreiState = {
		name: 'drei',
		url: '/drei',
		templateUrl: './drei.html',
		controller: "PageController",
	}
	
	$stateProvider.state(einsState);
	$stateProvider.state(zweiState);
	$stateProvider.state(dreiState);
}).controller("PageController",["$scope",function($scope){
	$scope.test = "Daten wurden geladen";
}]);