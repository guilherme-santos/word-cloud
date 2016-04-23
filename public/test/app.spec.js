// Filename: test/app.js

require.config({
  paths: {
    text: '../libs/text/text',
    jquery: '../libs/jquery/dist/jquery',
    underscore: '../libs/underscore-amd/underscore',
    backbone: '../libs/backbone-amd/backbone',
    mocha: '../libs/mocha/mocha',
    chai: '../libs/chai/chai',
    'chai-jquery': '../libs/chai-jquery/chai-jquery',
    app: '../javascripts',
    views: '../javascripts/views',
    collections: '../javascripts/collections',
    models: '../javascripts/models',
    templates: '../templates',
  },
  shim: {
    'chai-jquery': ['jquery', 'chai'],
    mocha: {
      exports: 'mocha'
    }
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});

define(function(require) {
  var chai = require('chai');
  var mocha = require('mocha');
  var jquery = require('jquery');
  var chaiJQuery = require('chai-jquery');
  
  // Chai
  var should = chai.should();
  chai.use(chaiJQuery);
  
  expect = chai.expect

  mocha.setup('bdd');
  mocha.bail(false);
  mocha.checkLeaks();
  mocha.globals(['jQuery']);

  require([
    'router.spec',
    'collections.spec',
    'models.spec',
    'views.spec',
  ], function(require) {
    mocha.run();
  });
});