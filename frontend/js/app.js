/*
app.js
Main app module for the angular BeersApp

Copyright (c) 2014

Patrick Crager

*/

angular.module('BeersApp', [

  'BeersApp.controllers',
  'BeersApp.services',
  'BeersApp.directives',
  'ngRoute',
  'ui.bootstrap'

]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.
  when('/table', {templateUrl: 'partials/table.html', controller: 'beersController'}).
  when('/block', {templateUrl: 'partials/block.html', controller: 'beersController'}).
  when('/list', {templateUrl: 'partials/list.html', controller: 'beersController'}).
  otherwise({redirectTo: '/table'});

}]);
