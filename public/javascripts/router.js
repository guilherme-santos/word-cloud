// Filename: router.js

define([
  'jquery',
  'underscore',
  'backbone',
  'views/topics/list',
  'views/topics/detail'
], function($, _, Backbone, TopicsListView, TopicDetailView) {
  'use strict';

  var AppRouter = Backbone.Router.extend({
    routes: {
      'topics/:id': 'showDetail'
    },

    initialize: function() {
      // Topics must be all visible
      this.topicsListView = new TopicsListView();

      // Wait until read data from server before start router
      this.topicsListView.collection.on('reset', function () {
        Backbone.history.start();
      });

      this.topicsListView.render();
    },
    showDetail: function(id) {
      this.topicDetailView = new TopicDetailView({
        el: $('#detail'),
        model: this.topicsListView.collection.get(id),
      });

      this.topicDetailView.on('close', _.bind(function() {
        this.navigate('');
      }, this));

      this.topicDetailView.render();
    }
  });

  return AppRouter;
});
