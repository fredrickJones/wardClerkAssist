'use strict';
var app = angular.module('wardClerkAssist', ['ngRoute', 'firebase']);

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
			controller: 'visitCtrl',
			resolve: {
				toVisit: function($route, visitService) {
					return visitService.needToVisit();
				}
			}
		}).when('/notward', {
			templateUrl: '/pages/notWard/notWard.html',
			controller: 'notWardCtrl',
			resolve: {
				notInWard: function($route, notService) {
					return notService.needToRemove();
				}
			}
		}).when('/person', {
			templateUrl: '/pages/person/person.html',
			controller: 'personCtrl',
			resolve: {
				personInfo: function($route, personService) {
					return personService.individualData();
				}
			}
		}).when('/dashboard/:userId', {
		    templateUrl: '/pages/dashboard/dashboard.html',
		    controller: 'dashboardCtrl',
		    resolve: {
		      userReference: function(firebaseService, $route){
		        return firebaseService.getUser($route.current.params.userId);
		      },
		      thingsReference: function(firebaseService, $route){
		        return firebaseService.getThings($route.current.params.userId);
				}
			}
		}).otherwise({
			redirectTo: '/login'
	});
});