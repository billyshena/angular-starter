'use strict';

/**
 * @ngdoc function
 * @name flppnApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the flppnApp
 */
angular.module('flppnApp')
  .controller('HeaderCtrl', function ($scope, $state) {
    console.log('HeaderCtrl');

    $scope.logout = function() {
      $state.go('login');
    }
});
