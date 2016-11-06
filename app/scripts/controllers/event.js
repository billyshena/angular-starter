'use strict';

/**
 * @ngdoc function
 * @name airliquideApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the airliquideApp
 */
angular.module('airliquideApp')
  .controller('EventCtrl', function ($scope, $state, $uibModalInstance, $http) {
    console.log('EventCtrl');

    $scope.patients = [];
    $scope.patient = {
      selected: null
    };
    $scope.pathologies = [
      { label: 'Consultation dentaire' },
      { label: 'Bilan complet' },
      { label: 'Détartrage' },
      { label: 'Urgence dentaire' },
      { label: 'Blanchiment des dents' },
      { label: 'Devis prothèse' },
      { label: 'Devis implant(s)' }
    ];
    $scope.sms = false;
    $scope.kalinox = false;

    $scope.add = function() {
      $scope.patient.pathology = $scope.pathology;
      $uibModalInstance.close($scope.patient);
    }

    $scope.close = function() {
      $uibModalInstance.dismiss();
    }


    $scope.setAllergies = function() {
      $scope.allergies = "Lidocaïne";
      $scope.sms = true;
      $scope.kalinox = true;
    }

    function loadPatients() {
      $http.get('/data/patients.json').then(function(response) {
        $scope.patients = response.data.patients;
      });
    }

    loadPatients();

})
.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});
