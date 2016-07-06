/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  /**
   * Table Item Model has `food`, `servings`, and `totalCal` attributes.
   */
  app.TableItem = Backbone.Model.extend({
    // Default attributes
    defaults: {
      food: '',
      servings: 0,
      totalCal: 0
    }


  });
})();