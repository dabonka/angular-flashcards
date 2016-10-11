'use strict';

// Register `cardCheck` component, along with its associated controller and template
angular.
  module('cardCheck').
  component('cardCheck', {
    templateUrl: 'card-check/card-check.template.html',
    controller: function CardCheckController($http) {
      var self = this;
      
      $http.get('cards/cards.json').then(function(response) {
        self.card = response.data;

      });

       self.formSubmit = function(event) {
        event.preventDefault();
        console.log(self.user_variant);
        console.log(self.card.card_id);
      }
    }
  });