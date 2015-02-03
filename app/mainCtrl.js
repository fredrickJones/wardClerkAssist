'use strict';
var app = angular.module('wardClerkAssist');

app.controller('mainCtrl', function($scope, environService) {
	$scope.getData = function() {
		$scope.lists = environService.getList().$asArray();
		// console.log($scope.queue);
	};

	$scope.postToQueue = function() {
		var data = {};
		data.question = $scope.question;
		data.status = 'red';
		data.createdAt = new Date();
		$scope.queue.$add(data);
		$scope.question = '';
		// console.log(data);
	};
	
	$scope.changeQueue = function(question) {
		question.status = 'yellow';
		question.createdAt = new Date();
		$scope.queue.$save(question);
		// console.log(question);
	};

	$scope.delFromQ = function(item) {
		$scope.queue.$remove(item);
		return;
	};

	$scope.getData();
	console.log($scope.queue);
});