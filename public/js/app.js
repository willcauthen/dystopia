console.log("We're in good shape");

var app = angular.module('dystopia', []);

app.controller('MainCtrl', function ($scope) {
	$scope.name = "World";

	$scope.players = [
		{name: 'Dustin', role: "muscle"},
		{name: 'Cody', role: "magic"},
		{name: 'Will', role: "moxie"}
	];
	$scope.addPlayer = function () {
		// console.log($scope.newPlayer);
		$scope.players.push($scope.newPlayer);
	};
});
