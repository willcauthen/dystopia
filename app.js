console.log("We're in good shape");

var app = angular.module("angularSmall", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('people-index', {
			url: "/",
			templateUrl: "templates/people.html",
			controller: 'PeopleIndexCtrl'
		});
});

app.controller("MainCtrl", function ($scope) {
	$scope.message = "WORLD!";
});


app.controller("PeopleIndexCtrl", function ($scope) {
	$scope.people = [
	{name: 'Tony', age: 23},
	{name: 'Marco', age: 31},
	{name: 'Alejandro', age: 17},
	{name: 'Marvin', age: 9}];

	$scope.addPerson = function() {
		$scope.people.push($scope.newPerson);
		$scope.newPerson = {};
	};
	
})