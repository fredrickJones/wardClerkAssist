'use strict';
var app = angular.module('wardClerkAssist');

app.controller('loginCtrl', function($scope, environService, $location) {
	$scope.env = environService.getEnv();
	$scope.signIn
})