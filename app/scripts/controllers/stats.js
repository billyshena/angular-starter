'use strict';

/**
 * @ngdoc function
 * @name airliquideApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the airliquideApp
 */
angular.module('airliquideApp')
  .controller('StatsCtrl', function ($scope, $state) {
    console.log('StatsCtrl');

    $scope.reviews = [
      {
        name: "Mark Zuckeberg",
        avatar: "http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ]
      },
      {
        name: "Mark Zuckeberg",
        avatar: "http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ]
      },
      {
        name: "Mark Zuckeberg",
        avatar: "http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ]
      },
      {
        name: "Mark Zuckeberg",
        avatar: "http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ]
      },
      {
        name: "Mark Zuckeberg",
        avatar: "http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ]
      }
    ];



    Highcharts.chart('container', {

     chart: {
         type: 'column'
     },

     title: {
         text: 'Consommation totale Kalinox'
     },

     xAxis: {
         categories: ['Hommes', 'Femmes', 'Enfants']
     },

     yAxis: {
         allowDecimals: false,
         min: 0,
         max: 100,
         tickInterval: 100,
         title: {
             text: 'Pourcentage patient'
         }
     },

     tooltip: {
         formatter: function () {
             return '<b>' + this.x + '</b><br/>' +
                 this.series.name + ': ' + this.y + '<br/>';
         }
     },

     plotOptions: {
         column: {
             stacking: 'normal'
         }
     },
     credits: {
       enabled: false
     },

     series: [{
         name: 'Total',
         data: [20, 30, 50]
     },
     {
       name: 'Kalinox',
       data: [3, 10, 40]
     }
   ]
 });
});
