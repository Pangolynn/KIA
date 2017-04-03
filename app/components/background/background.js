'use strict'

angular.module('knowItAll.background', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/background', {
    templateUrl: 'background/background.html',
    controller: 'BackgroundCtrl'
  });
}])

.controller('BackgroundCtrl', [function() {

}]);
