'use strict';
var app = angular.module('wardClerkAssist');

app.controller('loginCtrl', function($scope, environService, $location) {
	$scope.env = environService.getEnv();
	$scope.signIn


	$scope.formData = {};
	$scope.formFields = [
    	{
	        //the key to be used in the model values {... "username": "johndoe" ... }
	        key: 'username',
	        type: 'text',
	        label: 'Username',
	        placeholder: 'johndoe',
	        required: true,
	        disabled: false,
	        description: 'Descriptive text'
	    },
	    {
	        key: 'password',
	        type: 'password',
	        label: 'Password',
	        required: true,
	        disabled: false,
	        expressionProperties: {
	            hide: '!model.username'
	        }
	    }
	];

	$scope.onSubmit = function() {
	    console.log('form submitted:', $scope.formData);
	};
})