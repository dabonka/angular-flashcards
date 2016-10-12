'use strict';

// Register `cardCheck` component, along with its associated controller and template
angular.
  module('cardCheck').
  component('cardCheck', {
    templateUrl: 'card-check/card-check.template.html',
    controller: ['Card',
    function CardCheckController(Card) {

      $onInit() {
      

      }

      var self = this;
      $ctrl.card = result.data
      self.formSubmit = function(event) {
      event.preventDefault();
      console.log(self.user_variant);
      console.log(self.card.card_id);
      }
    }
  });