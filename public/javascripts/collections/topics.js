// Filename: collections/topics

define([
  'underscore',
  'backbone',
  'models/topic'
], function(_, Backbone, TopicModel) {
  'use strict';
  
  var TopicCollection = Backbone.Collection.extend({
    model: TopicModel,
    url: '/api/v1/topics'
  });
  
  return TopicCollection;
});