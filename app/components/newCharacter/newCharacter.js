'use strict'

angular.module('knowItAll.newCharacter', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/newCharacter', {
    templateUrl: 'newCharacter/newCharacter.html',
    controller: 'NewCharacterCtrl'
  });
}])

.controller('NewCharacterCtrl', [function() {

}]);
