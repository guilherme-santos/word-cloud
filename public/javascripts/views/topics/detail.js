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
    template: _.template(topicDetailTemplate),
    events: {
      'click button.close': 'close'
    },
    
    render: function() {
      var compiledTemplate = this.template({topic: this.model.attributes});
      this.$el.html(compiledTemplate);
    },
    close: function () {
      this.$el.html('');
      this.trigger('close');
    }
  });
  
  return TopicDetailView;
});