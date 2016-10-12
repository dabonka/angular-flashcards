angular.
  module('core.card').
    factory('Card', ['$resource', ($resource) ->
      $resource('/api/v1/cards.json', {id: '@id'}, {
        get_random_card: {method: 'GET'}
        compare: {method: 'POST', url: ‘/api/v1/cards/compare.json'}
      })
    ])  
