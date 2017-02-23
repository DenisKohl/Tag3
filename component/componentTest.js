angular.module("CompTest", [])
.directive("tom",function(){
	return{
		scope: {
            msg: '='
        },
		restrict : "E",
		replace : true,
		template: '<p>Hallo {{$ctrl.msg}}</p>',
		controller: function(){
			this.msg = "Tom";
		},
		controllerAs: '$ctrl'
	};
}).component('ute',{
	template: `<p>Guten Tag {{ $ctrl.message.name }} </p>
	Hier kommt die zweite Zeile. <br>
	hier die dritte {{ $ctrl.message.name }}`,
	controller: function(){
		this.message = {name : "Ute" };
	}
});