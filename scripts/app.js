/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
  'use strict';

  // kick things off by creating the `App`
  // new app.SearchView();
  
  
  $('button').on('click', function() {
    
    console.log('click');

    $.ajax({
      type: "GET",
      dataType: 'json',
      cache: false,
      url: '/scripts/api.js',
      async: true
    })
      .done(function (response) {
        console.log(response);
      })
      .fail(function (response) {

      });

  });
  
  
});
