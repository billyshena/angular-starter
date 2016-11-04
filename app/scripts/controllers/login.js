'use strict';

/**
 * @ngdoc function
 * @name airliquideApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the airliquideApp
 */
angular.module('airliquideApp')
  .controller('LoginCtrl', function ($scope, $state) {

  $scope.login = function() {
    $state.go('app.home');
  }

});
