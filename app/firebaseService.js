'use strict';
var app = angular.module('personTracker');

app.service('firebaseService', function($http, $q, $firebase, fireConstant) {
	var url = fireConstant.firebaseUrl;

	this.getUser = function(userId){
		return $firebase(new Firebase(url + 'users/' + userId)).$asObject();
	};

	this.getThings = function(userId){
		return $firebase(new Firebase(url + 'users/' + userId + '/things')).$asArray();
	};

	this.getList = function() {
		return $firebase(new Firebase(url + '/list'));
	};
});