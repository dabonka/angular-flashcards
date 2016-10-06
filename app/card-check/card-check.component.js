'use strict';

// Register `cardCheck` component, along with its associated controller and template
angular.
  module('cardCheck').
  component('cardCheck', {
    templateUrl: 'card-check/card-check.template.html',
    controller: function CardCheckController($http) {
      var self = this;
      self.orderProp = 'card_id';

      $http.get('cards/cards.json').then(function(response) {
        self.cards = response.data;
      });
    }
  });