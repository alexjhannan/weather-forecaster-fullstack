// CONTROLLERS
weatherForecaster.controller('homeCtrl', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
	// empty the input
	$scope.city = '';

	// when $scope.city changes, update cityService.city
  $scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
	
	// submission function, to enable submission on hitting enter (and not just a button press)
	$scope.submit = function(){
		// sets the hash route to '/forecast'
		$location.path('/forecast');
	};
}]);

weatherForecaster.controller('forecastCtrl', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
	// pull city name from cityService.city;
    $scope.city = cityService.city;
		
		// and pull number of days from route parameters
		$scope.days = $routeParams.days || '2';
		
		$scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

		// method to convert from kelvin to fahrenheit
		$scope.convertToF = function(degK){
			return Math.round((1.8 * (degK - 273.15)) + 32);
		}
		
		$scope.convertToDate = function(dt){
			return new Date(dt * 1000);
		}
		
}]);
