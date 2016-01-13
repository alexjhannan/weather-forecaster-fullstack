// ROUTES
weatherForecaster.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    })
    
    .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'forecastCtrl'
    })
		
		.when('/forecast/:days', {
			templateUrl: 'views/forecast.html',
			controller: 'forecastCtrl'
		})
    
});