'use strict';
var app = angular.module('wardClerkAssist');

app.service('firebaseService', function ($firebase) {
	var firebaseUrl = 'https://wardclerk.firebaseio.com/';

	this.getUser = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
	};

	this.getThings = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/things')).$asArray();
	};
});