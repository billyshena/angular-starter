'use strict';

/**
 * @ngdoc overview
 * @name flppnApp
 * @description
 * # flppnApp
 *
 * Main module of the application.
 */
angular
  .module('flppnApp', [
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push('AuthInterceptor');

    console.log('$stateProvider', $stateProvider);

    $stateProvider
      .state('landing', {
        url: '/',
        controller: function() {
          return console.log('Landing route');
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'theContent@': {
            controller: 'LoginCtrl',
            templateUrl: 'views/login.html'
          }
        }
      });

  });
