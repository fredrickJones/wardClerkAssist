'use strict';
var app = angular.module('wardClerkAssist');

app.controller('entryCtrl', function($scope, $location, firebaseService) {
	$scope.newEntry = function() {
		var data = {};
		data.name = $scope.detals.name;
		data.address = $scope.detals.address;
		data.status = 'visitList';
		$scope.ward.$add(data);
		$scope.newEntry = '';
		console.log(data);
	}

	$scope.getList = function() {
	};

	$scope.postToList = function() {
		var data = {};
		data.name = $scope.details.name;
		data.address = $scope.details.address;
		data.status = 'visitList';
		$scope.visitList.$add(data);
		$scope.details.name = '';
		$scope.details.address = '';
		console.log(data);
	};
	
	$scope.notInWard = function(data) {
		data.status = 'notInWard';
		$scope.notInWard.$save(data);
		// console.log(data);
	};

	$scope.delFromList = function(item) {
		$scope.queue.$remove(item);
		return;
	};

	$scope.getData();
	// console.log($scope.queue);
});