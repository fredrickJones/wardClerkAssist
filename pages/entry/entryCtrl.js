'use strict';
var app = angular.module('wardClerkAssist');

app.controller('entryCtrl', function($scope, userReference, thingsReference){
	$scope.profile = userReference;
	$scope.things = thingsReference;

	$scope.addEntry = function(){
		$scope.ward.$add($scope.name);
	};

	$scope.removeThing = function(thing){
		$scope.things.$remove(thing);
	};

	$scope.update = function(){
		$scope.profile.$save();
	};


	// $scope.profile = userReference;
	// $scope.things = thingsReference;

	// $scope.addThing = function(){
	// 	$scope.things.$add($scope.thing);
	// };

	// $scope.removeThing = function(thing){
	// 	$scope.things.$remove(thing);
	// };

	// $scope.update = function(){
	// 	$scope.profile.$save();
	// };
});


// app.controller('entryCtrl', function($scope, $location, firebaseService) {
// 	$scope.newEntry = function() {
// 		var data = {};
// 		data.name = $scope.detals.name;
// 		data.address = $scope.detals.address;
// 		data.status = 'visitList';
// 		$scope.ward.$add(data);
// 		$scope.newEntry = '';
// 		console.log(data);
// 	}
	// $scope.getData = function() {
	// };

	// $scope.postToQueue = function() {
	// 	var data = {};
	// 	data.question = $scope.question;
	// 	data.status = 'red';
	// 	data.createdAt = new Date();
	// 	$scope.queue.$add(data);
	// 	$scope.question = '';
	// 	// console.log(data);
	// };
	
	// $scope.changeQueue = function(question) {
	// 	question.status = 'yellow';
	// 	question.createdAt = new Date();
	// 	$scope.queue.$save(question);
	// 	// console.log(question);
	// };

	// $scope.delFromQ = function(item) {
	// 	$scope.queue.$remove(item);
	// 	return;
	// };

	// $scope.getData();
	// console.log($scope.queue);
// });