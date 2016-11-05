'use strict';

/**
 * @ngdoc function
 * @name airliquideApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the airliquideApp
 */
angular.module('airliquideApp')
  .controller('EventCtrl', function ($scope, $state, $uibModalInstance) {
    console.log('EventCtrl');
    $scope.patient = {};

    $scope.add = function() {
      $uibModalInstance.close($scope.patient);
    }

    $scope.close = function() {
      $uibModalInstance.dismiss();
    }
});
