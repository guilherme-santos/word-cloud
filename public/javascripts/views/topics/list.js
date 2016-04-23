// Filename: views/topics/list

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/topics',
  'text!templates/topics/list.html'
], function($, _, Backbone, TopicsCollection, topicsListTemplate) {
  'use strict';
  
  var TopicsListView = Backbone.View.extend({
    el: $('#container'),
    
    initialize: function(){
      this.collection = new TopicsCollection();
      this.loading = $('p#loading');
    },
    
    fetchSuccess: function () {
      // Get steps to decide between popularities
      var max = _.max(this.collection.toJSON(), function (topic) {
        return topic.volume;
      }).volume;
      var step = max / 6;
      
      _.each(this.collection.models, function (topic) {
        topic.set('popularityStep', step);
      });
      
      this.loading.hide();
      this.render();
    },
    render: function() {
      if (this.collection.length === 0) {
        this.loading.show();
        this.collection.fetch({
          reset: true,
          success: _.bind(this.fetchSuccess, this),
        });
        
        return;
      }
      
      var compiledTemplate = _.template(topicsListTemplate, {topics: this.collection.models});
      this.$el.append(compiledTemplate);
    }
  });
  
  return TopicsListView;
});