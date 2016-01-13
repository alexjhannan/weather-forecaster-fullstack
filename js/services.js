// SERVICES

weatherForecaster.service('cityService', function(){
	
	this.city = 'New York, NY';
	
});

weatherForecaster.service('weatherService', ['$resource', function($resource){

	this.getWeather = function(city, days){
			// configure the api URL and callback type so we can make a weather request
			var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: "JSON_CALLBACK"}, { get : {method: "JSONP" } } );

			// then, invoke a get request from that API, and pass in an object with all parameters
			return weatherAPI.get({ q: city, cnt: days, APPID: '4bdc91b5cf0149b69ab58656601fb3b4' });
		};
}]);