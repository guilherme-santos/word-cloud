// Filename: app.js

require.config({
  paths: {
    text: '/libs/text/text',
    templates: '/templates',
    jquery: '/libs/jquery/dist/jquery',
    underscore: '/libs/underscore-amd/underscore',
    backbone: '/libs/backbone-amd/backbone'
  }
});

require(['router'], function(Router) {
  Router.initialize();
});
