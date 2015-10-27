angular.module('tcpTest', ['ionic','ngCordova']);

angular.module('tcpTest').config(configure);
configure.$inject= ['$stateProvider', '$urlRouterProvider','$compileProvider','$ionicConfigProvider'];

function configure($stateProvider, $urlRouterProvider, $compileProvider, $ionicConfigProvider) {
	$compileProvider.debugInfoEnabled(false);
	$ionicConfigProvider.views.transition('none');
	$urlRouterProvider.otherwise('/home')
	$stateProvider.state('home', {
    	url: '/home',
    	cache: false,
    	templateUrl: 'home.html',
		controller: 'tcpController as vm',
	});
}

angular.module('tcpTest').run(run);
run.$inject= ['$ionicPlatform'];

function run($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    	}
    	if (window.StatusBar) {
		    StatusBar.styleDefault();
    	}
  	});
}