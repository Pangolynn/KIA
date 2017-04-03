'use strict';

angular.module('knowItAll.spells', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spells', {
    templateUrl: 'spells/spells.html',
    controller: 'SpellsCtrl'
  });
}])

.controller('SpellsCtrl', [function() {

}]);
