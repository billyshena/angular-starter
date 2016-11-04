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
      });

  });
