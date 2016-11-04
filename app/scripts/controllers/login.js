'use strict';

/**
 * @ngdoc function
 * @name flppnApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the flppnApp
 */
angular.module('flppnApp')
  .controller('LoginCtrl', function ($scope, $state) {

  $scope.login = function() {
    $state.go('home');
  }

});
