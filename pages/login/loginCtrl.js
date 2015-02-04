// 'use strict';
// var app = angular.module('wardClerkAssist');

// app.controller('loginCtrl', function($scope, authService, $location) {
// 	var loginCallback = function(user){
// 		user.uid = user.uid.replace('simplelogin:', '');
// 		$scope.$apply(function(){
// 			$location.path('/entry/' + user.uid)
// 		});
// 	};

// 	$scope.login = function () {
// 		return authService.login($scope.details, loginCallback);
// 	};

// //Step 2 of Registration
// 	$scope.register = function () {
// 		authService.register($scope.details, loginCallback);
// 	};

// 	$scope.status = 'Register';
// 	$scope.showReg = function(){
// 		if($scope.status === 'Register') {
// 			$scope.status = 'Login';
// 		} else {
// 			$scope.status = 'Register';
// 		}
// 		$scope.reg = !$scope.reg;
// 	};

// });