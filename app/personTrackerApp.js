'use strict';
var app = angular.module('personTracker', ['firebase', 'ngAnimate']);

app.constant('fireConstant', {
	'firebaseUrl': 'https://wardclerk.firebaseio.com/'
});

// app.config(function($routeProvider) {
// 	$routeProvider
// 		.when('/login', {
// 			templateUrl: '/pages/login/login.html',
// 			controller: 'loginCtrl'
// 		})
// 		.when('/entry', {
// 		    templateUrl: '/pages/entry/entry.html',
// 		    controller: 'entryCtrl',
// 		    resolve: {
// 				userReference: function(firebaseService, $route){
// 					return firebaseService.getUser($route.current.params.userId);
// 				},
// 				thingsReference: function(firebaseService, $route){
// 					return firebaseService.getThings($route.current.params.userId);
// 				}
// 			}
// 		}).when('/visit', {
// 			templateUrl: '/pages/visit/visit.html',
// 			controller: 'visitCtrl',
// 		}).when('/notward', {
// 			templateUrl: '/pages/notWard/notWard.html',
// 			controller: 'notWardCtrl',
// 		}).when('/person', {
// 			templateUrl: '/pages/person/person.html',
// 			controller: 'personCtrl',
// 		}).otherwise({
// 			redirectTo: '/login'
// 	});
// });