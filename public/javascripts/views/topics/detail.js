// Filename: views/topics/detail

define([
  'jquery',
  'underscore',
  'backbone',
  'models/topic',
  'text!templates/topics/detail.html'
], function($, _, Backbone, TopicModel, topicDetailTemplate) {
  'use strict';
  
  var TopicDetailView = Backbone.View.extend({
    events: {
      'click button#close': 'close'
    },
    
    render: function() {
      var compiledTemplate = _.template(topicDetailTemplate, {topic: this.model.attributes});
      this.$el.html(compiledTemplate);
    },
    close: function () {
      this.$el.html('');
      this.trigger('close');
    }
  });
  
  return TopicDetailView;
});