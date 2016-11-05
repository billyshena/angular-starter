'use strict';

/**
 * @ngdoc function
 * @name airliquideApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the airliquideApp
 */
angular.module('airliquideApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    console.log('MainCtrl');
    $scope.isProfile = false;
    $scope.menu = [
      {
        id: 1,
        title: "Avis client",
        active: true
      },
      {
        id: 2,
        title: 'Historique'
      }
    ];
    $scope.feedbacks = [
      {
        id: 1,
        date: '10 janvier 2016',
        value: 5,
        content: 'Excellent. Une superbe prestation, rien à dire !',
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ]
      },
      {
        id: 1,
        date: '10 janvier 2016',
        value: 4,
        content: 'Bon soin dans l\'ensemble, agréable et conviviale',
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5, disable: true }
        ]
      },
      {
        id: 1,
        date: '10 janvier 2016',
        value: 3,
        content: 'Excellent.',
        alert: true,
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4, disable: true }, { id: 5, disable: true }
        ]
      },
      {
        id: 1,
        date: '10 janvier 2016',
        value: 5,
        content: 'Excellent. Une superbe prestation, rien à dire !',
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ]
      },
      {
        id: 1,
        date: '10 janvier 2016',
        value: 4,
        content: 'Bon soin dans l\'ensemble, agréable et conviviale',
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5, disable: true }
        ]
      },
      {
        id: 1,
        date: '10 janvier 2016',
        value: 3,
        content: 'Excellent.',
        alert: true,
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4, disable: true }, { id: 5, disable: true }
        ]
      }
    ];
    $scope.isFeedback = true;
    $scope.isHistory = false;

    $scope.switch = function(item) {
      console.log('item', item);
      $scope.menu.forEach(function(item) {
        item.active = false;
      });
      item.active = true;
      if(item.id === 1) {
        $scope.isFeedback = true;
        $scope.isHistory = false;
      }
      else {
        $scope.isFeedback = false;
        $scope.isHistory = true;
      }
    }

    $scope.closeProfile = function() {
      $scope.isProfile = false;
    }


    $rootScope.$on('openProfile', function() {
      $scope.isProfile = true;
    });

  });
