'use strict';

describe('cardCheck', function() {

  // Load the module that contains the `cardCheck` component before each test
  beforeEach(module('cardcatApp'));

  // Test the controller
  describe('CardCheckController', function() {

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('cardCheck');

      expect(ctrl.cards.length).toBe(3);
    }));

  });

});