// Filename: models/topic

define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  'use strict';

  var TopicModel = Backbone.Model.extend({
    initialize: function() {
      this.on('change:popularityStep', this.updatePopularityLevel);
      this.on('change:volume', this.updatePopularityLevel);
      this.on('change:sentimentScore', this.updateSentimentScoreColor);
      this.updateSentimentScoreColor();
    },
    updatePopularityLevel: function() {
      var volume = this.get('volume');
      var step   = this.get('popularityStep');

      for (var i = 1 ; i <= 6 ; i++) {
        if (volume > (step*i)) {
          continue;
        }

        this.set('popularityLevel', i);
        return;
      }

      this.set('popularityLevel', 6);
    },
    updateSentimentScoreColor: function() {
      var color, score = this.get('sentimentScore');
      if (score > 60) { color = 'green'; }
      else if (score < 40) { color = 'red'; }
      else { color = 'grey'; }

      this.set('sentimentScoreColor', color);
    }
  });
  return TopicModel;
});