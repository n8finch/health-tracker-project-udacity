/*global Backbone */
var app = app || {};

(function () {
  'use strict';
  
  /**
   * Results Item Model has `food` and `servings` attributes.
   */
  app.ResultsItem = Backbone.Model.extend({
    // Default attributes
    defaults: {
      food: '',
      servings: 0
    }


  });
})();