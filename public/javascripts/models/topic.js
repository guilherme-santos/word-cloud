// Filename: models/topic

define([
  'underscore',
  'backbone',
  'collections/topics'
], function(_, Backbone, TopicsCollection) {
  var TopicModel = Backbone.Model.extend({
    setPopularityLevel: function (step) {
      var volume = this.get('volume');
      
      for (var i = 1 ; i <= 6 ; i++) {
        if (volume > (step*i)) {
          continue;
        }

        this.set('popularityLevel', i)
        return
      }
      
      this.set('popularityLevel', 6)
    }
  });
  return TopicModel;
});