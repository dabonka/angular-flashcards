'use strict';

// Register `cardCheck` component, along with its associated controller and template
angular.
  module('cardcatApp').
  component('cardCheck', {
    template:

  '<ul>' +
    '<li ng-repeat="card in $ctrl.cards"> +
      '<span>{{card.original_text}}</span>' +
      '<p>{{card.translated_text}}</p>' +
    '</li>' +
  '</ul>',


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