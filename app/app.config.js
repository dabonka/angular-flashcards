'use strict';

angular.
  module('cardcatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/cards', {
          template: '<card-check></card-check>'
        }).
        otherwise('/cards');
    }
  ]);