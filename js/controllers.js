// CONTROLLERS
weatherForecaster.controller('homeCtrl', ['$scope', 'cityService', function($scope, cityService){
	// empty the input
	$scope.city = '';

	// when $scope.city changes, update cityService.city
  $scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
}]);

weatherForecaster.controller('forecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
	// pull city name from cityService.city;
    $scope.city = cityService.city;
		
		// and pull number of days from route parameters
		$scope.days = $routeParams.days || '2';
		
		// next up, we're going to call on a weather API to get our data configure the api URL and callback type
		var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: "JSON_CALLBACK"}, { get : {method: "JSONP" } } );
		
		// then, invoke a get request from that API, and pass in an object with all parameters
		$scope.weatherResult = weatherAPI.get({ q: $scope.city, cnt: $scope.days, APPID: '4bdc91b5cf0149b69ab58656601fb3b4' });
		
		// method to convert from kelvin to fahrenheit
		$scope.convertToF = function(degK){
			return Math.round((1.8 * (degK - 273.15)) + 32);
		}
		
		$scope.convertToDate = function(dt){
			return new Date(dt * 1000);
		}
		
		console.log($scope.weatherResult);
}]);
