'use strict';
var app = angular.module('wardClerkAssist', ['ngRoute', 'firebase', 'formly']);

app.constant('fireConstant', {
	"firebaseUrl": "https://wardclerk.firebaseio.com/"
});

app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: '/pages/login/login.html',
			controller: 'loginCtrl'
		}).when('/entry', {
			templateUrl: '/pages/entry/entry.html',
			controller: 'entryCtrl'
		}).when('/visit', {
			templateUrl: '/pages/visit/visit.html',
			controller: 'visitCtrl'
		}).when('/notward', {
			templateUrl: '/pages/notWard/notWard.html',
			controller: 'notWardCtrl'
		}).when('/person', {
			templateUrl: '/pages/person/person.html',
			controller: 'personCtrl'
		}).otherwise({
			redirectTo: '/login'
		});
});


app.run(function($rootScope, $route, $location, $routeParams, environService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if (environService.getUserName()) {
			$rootScope.username = environService.getUserName();
		} else {
			$location.path('/login');
		}
	});
});