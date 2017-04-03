'use strict';

angular.module('knowItAll.version', [
  'knowItAll.version.interpolate-filter',
  'knowItAll.version.version-directive'
])

.value('version', '0.1');
