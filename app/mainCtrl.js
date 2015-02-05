'use strict';
var app = angular.module('personTracker');

app.controller('mainCtrl', function($scope, firebaseService) {
	$scope.getData = function() {
		$scope.list = firebaseService.getList().$asArray();
		// console.log($scope.list);
	};

	$scope.postToList = function() {
		var data = {};
		data.name = $scope.name;
		data.street = $scope.street;
		data.city = $scope.city;
		data.state = $scope.state;
		data.zip = $scope.zip;
		data.status = 'wantMe';
		data.address = $scope.street + ' ' + $scope.city + ', ' + $scope.state + ' ' + $scope.zip;
		$scope.list.$add(data);
		$scope.name = '';
		$scope.street = '';
		$scope.city = '';
		$scope.state = '';
		$scope.zip = '';
		// console.log(data);
	};

	$scope.person = false;
	$scope.toggleAddress = function(person) {
		person.visible = !person.visible;
	};

	$scope.notWanted = function(person) {
		person.status = 'notWanted';
		$scope.list.$save(person);
		// console.log(person);
	};

	$scope.moveBack = function(person) {
		person.status = 'wantMe';
		$scope.list.$save(person);
		// console.log(person);
	};

	$scope.delFromList = function(item) {
		$scope.list.$remove(item);
		return;
	};

	$scope.getData();
	// console.log($scope.List);
});