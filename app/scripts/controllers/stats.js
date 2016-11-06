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
        content: "Résultat meilleur que freedent !",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ],
        time: '3h'
      },
      {
        name: "Bill Gates",
        avatar: "http://blogs-images.forbes.com/mfonobongnsehe/files/2014/09/bill-gates.jpg",
        content: "Mes dents brillent plus que le soleil",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ],
        time: '7h'
      },
      {
        name: "Donald Trump",
        avatar: "http://rightweb.irc-online.org/wp-content/uploads/2016/03/donald-trump.jpg",
        content: "I didn't enjoy that, sorry.",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3, disable: true }, { id: 4, disable: true }, { id: 5, disable: true }
        ],
        time: '10h'
      },
      {
        name: "François Hollande",
        avatar: "http://institutdeslibertes.org/wp-content/uploads/2015/09/french-president-francois-hollande-might-give-up.jpg",
        content: "Bien moins cher que mon coiffeur",
        stars: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ],
        time: '18h'
      }
    ];



    Highcharts.chart('container', {

     chart: {
         type: 'column'
     },

     title: {
         text: 'Patientèle',
         margin: 50,
         style: { "color": "rgba(0, 0, 0, 0.6)", "fontSize": "24px"}
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
             text: 'En %'
         }
     },

     tooltip: {
         formatter: function () {
             return '<b>' + this.x + '</b><br/>' +
                 this.series.name + ': ' + this.y + '%<br/>';
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
       data: [3, 10, 40],
       color: "rgba(0, 0, 0, 0.1)"
     }
   ]
 });
});
