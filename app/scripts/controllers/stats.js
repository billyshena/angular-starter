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
    ]
});
