// DIRECTIVES

weatherForecaster.directive('weatherReport', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@'
		}
	}
});