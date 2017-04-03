'use strict';

// Declare app level module which depends on views, and components
angular.module('knowItAll', [
  'ngRoute',
  'knowItAll.main',
  'knowItAll.spells',
  'knowItAll.stats',
  'knowItAll.newCharacter',
  'knowItAll.inventory',
  'knowItAll.background',
  'knowItAll.loadCharacter',
  'knowItAll.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
