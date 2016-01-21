console.log("We're in good shape");

var app = angular.module("angularSmall", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('users-index', {
			url: "/",
			templateUrl: "templates/user-index.html",
			controller: 'UserIndexCtrl'
		})
		.state('user-show', {
			url: "/users/:user_id",
			templateUrl: "templates/user-show.html",
			controller: "UserShowCtrl"
		})
});

app.controller("MainCtrl", function ($scope) {
	$scope.message = "WORLD!";
});


app.controller("UserIndexCtrl", function ($scope, User) {
	$scope.users = User.all();


	$scope.addUser = function() {
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
	};

});
app.controller("UserShowCtrl", function ($stateParams, $scope, User) {
	$scope.user = User.get($stateParams.user_id);
});

app.factory("User", function () {
	var users = [
	{id: 1, name: 'Tony', age: 23},
	{id: 2, name: 'Marco', age: 31},
	{id: 3, name: 'Alejandro', age: 17},
	{id: 4, name: 'Marvin', age: 9}];
	return {
		all: function() {
			return users;
		},
		remove: function(user) {
			users.splice(users.indexOf(user), 1);
		},
		get: function(userId) {
			for (var i = 0; i < users.length; i++) {
				if (users[i].id === parseInt(userId)) {
					return users[i];
				}
			}
			return null;
		}
	};
	
})