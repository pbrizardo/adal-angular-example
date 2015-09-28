'use strict';

/**
 * @ngdoc overview
 * @name pcApp
 * @description
 * # pcApp
 *
 * Main module of the application.
 */
angular
  .module('pcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'AdalAngular'
  ])
  .config(function ($routeProvider, $httpProvider, $locationProvider, adalAuthenticationServiceProvider) {
 
    $locationProvider.html5Mode(true).hashPrefix('!');

    adalAuthenticationServiceProvider.init(
      {
        tenant:'prizardowearecompanya.onmicrosoft.com',
        clientId:'dc39092b-0d0e-4dd0-b210-c20b8339997b',
        cacheLocation:'localStorage'
      },
      $httpProvider
    );  

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/secretdoor', {
        templateUrl: 'views/secretdoor.html',
        controller: 'SecretDoorController',
        controllerAs: 'sd',
        requireADLogin: true
      })
      .otherwise({
        redirectTo: '/'
      });
  });
