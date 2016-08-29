angular
	.module('joaomarcuslfWebApp')
	.controller('flowController', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$watch('page', function(newValue, oldValue) {
			setHide()
	    if(newValue === 'home') {
	    	$scope.home = true;
	    }
	    else if(newValue === 'about') {
	    	$scope.about = true;
	    }
	    else if(newValue === 'portfolio') {
	    	$scope.portfolio = true;
	    }
	    else if(newValue === 'error') {
	    	$scope.error = true;
	    }
	  });

	  function setHide() {
	  	$scope.home = false;
	  	$scope.about = false;
	  	$scope.portfolio = false;
	  	$scope.error = false;
	  }
	}]);