console.log("We're in good shape");

var app = angular.module('dystopia', ['ui.router']);

app.controller('MainCtrl', function ($scope) {
	$scope.name = "World";

	$scope.players = [
		{name: 'Dustin', role: "muscle", bool: true},
		{name: 'Cody', role: "magic", bool: true},
		{name: 'Will', role: "moxie", bool: true}
	];
	$scope.addPlayer = function () {
		// console.log($scope.newPlayer);
		$scope.players.push($scope.newPlayer);
	};
	$scope.wasClicked = function() {
		if ($scope.player.bool === true) {
			$scope.player.bool = false;
		}
	};
});
