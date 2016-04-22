// Filename: router.js

define([
  'jquery',
  'underscore',
  'backbone',
  'views/topics/list',
  'views/topics/detail'
], function($, _, Backbone, TopicsListView, TopicDetailView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      'topics/:id': 'showDetail'
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter();
    
    // Topics must be all visible
    var topicsListView = new TopicsListView();
    topicsListView.render();
    
    // Wait until read data from server before start router
    topicsListView.collection.on('reset', function () {
      Backbone.history.start();
    });
    
    appRouter.on('route:showDetail', function(id) {
      var topicDetailView = new TopicDetailView({
        el: $('#detail'),
        model: topicsListView.collection.get(id),
      });
      
      topicDetailView.on('close', _.bind(function() {
        appRouter.navigate('');
      }, this));
      
      topicDetailView.render();
    });
  };
  
  return {
    initialize: initialize
  };
});