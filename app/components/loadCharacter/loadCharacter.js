'use strict'

angular.module('knowItAll.loadCharacter', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loadCharacter', {
    templateUrl: 'loadCharacter/loadCharacter.html',
    controller: 'LoadCharacterCtrl'
  });
}])

.controller('LoadCharacterCtrl', [function() {

}]);
