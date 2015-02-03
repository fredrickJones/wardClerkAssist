'use strict';
var app = angular.module('wardClerkAssist');

app.service('environService', function($http, $q, $firebase, fireConstant, $window) {
	var url = fireConstant.firebaseUrl;

	// var ref = new Firebase("wardclerk.firebaseio.com/");
	// ref.authWithCustomToken(AUTH_TOKEN, function(error, authData) {
 //  		if (error) {
 //    		console.log("Login Failed!", error);
 //  		} else {
 //    		console.log("Login Succeeded!", authData);
 //  		}
	// });

	this.getList = function() {
		return $firebase(new Firebase(url + '/members'));
	};

	this.saveUserName = function(username) {
		$window.localStorage.setItem('username', username);
	};

	this.getUserName = function() {
		return $window.localStorage.getItem('username');
	};
	
});

