// Filename: views/topics/list

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/topics',
  'jqcloud'
], function($, _, Backbone, TopicsCollection, jQCloud) {
  'use strict';
  
  var TopicsListView = Backbone.View.extend({
    el: $('#cloud'),
    
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
      
      this.$el.jQCloud(_.map(this.collection.models, function(topic) {
        var classes = [
          'popularity-word-' + topic.get('popularityLevel'),
          'sentiment-score-' + topic.get('sentimentScoreColor'),
        ]

        return {
          text: topic.get('label'),
          weight: topic.get('popularityLevel'),
          link: '#/topics/' + topic.get('id'),
          html: {
            class: classes.join(' '),
          },
        };
      }), {
        width: this.$el.width(),
        height: 300,
        delay: 50,
        shape: 'rectangular',
        autoResize: true,
      });
    }
  });
  
  return TopicsListView;
});