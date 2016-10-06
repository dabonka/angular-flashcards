'use strict';

// Register `cardCheck` component, along with its associated controller and template
angular.
  module('cardCheck').
  component('cardCheck', {
    templateUrl: 'card-check/card-check.template.html',


    controller: function CardCheckController() {
      this.cards = [
        {
          original_text: "home",
          translated_text: "дом"
        },

        {
          original_text: "wolf",
          translated_text: "волк"
        }
      ];
    }
  });