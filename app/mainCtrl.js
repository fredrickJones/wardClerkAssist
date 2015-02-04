'use strict';
var app = angular.module('wardClerkAssist');

app.controller('mainCtrl', function($scope, $location, firebaseService) {
	$scope.getData = function() {
	};

	$scope.delFromQ = function(item) {
		$scope.queue.$remove(item);
		return;
	};

	$scope.getList();
	console.log($scope.visitList);
});