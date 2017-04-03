'use strict';

angular.module('knowItAll.inventory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inventory', {
    templateUrl: 'inventory/inventory.html',
    controller: 'InventoryCtrl'
  });
}])

.controller('InventoryCtrl', [function() {

}]);
