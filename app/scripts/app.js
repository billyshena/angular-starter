'use strict';

/**
 * @ngdoc overview
 * @name airliquideApp
 * @description
 * # airliquideApp
 *
 * Main module of the application.
 */
angular
  .module('airliquideApp', [
    'ngSanitize',
    'ui.router',
    'ui.calendar',
    'ui.bootstrap',
    'ui.select'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push('AuthInterceptor');

    console.log('$stateProvider', $stateProvider);

    $stateProvider
      .state('app', {
        abstract: true,
        views : {
          'theHeader@': {
            templateUrl: 'views/header.html',
            controller: 'HeaderCtrl'
          },
          'theNav@': {
            templateUrl: 'views/navigation.html',
            controller: 'NavigationCtrl'
          }
        }
      })
      .state('app.home', {
        url: '/',
        views: {
          'theContent@': {
            controller: 'HomeCtrl',
            templateUrl: 'views/home.html'
          }
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
      })
      .state('app.agenda', {
        url: '/agenda',
        views: {
          'theContent@': {
            controller: 'AgendaCtrl',
            templateUrl: 'views/agenda.html'
          }
        }
      })
      .state('app.stats', {
        url: '/statistiques',
        views: {
          'theContent@': {
            controller: 'StatsCtrl',
            templateUrl: 'views/stats.html'
          }
        }
      });

  });
