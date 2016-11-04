'use strict';

/**
 * @ngdoc function
 * @name airliquideApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the airliquideApp
 */
angular.module('airliquideApp')
  .controller('HeaderCtrl', function ($scope, $state) {
    console.log('HeaderCtrl');

    $scope.logout = function() {
      $state.go('login');
    }
});
