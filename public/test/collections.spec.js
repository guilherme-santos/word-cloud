define(function(require) {
  
  var TopicsCollection = require('collections/topics');
  var TopicModel = require('models/topic');
  
  describe('TopicsCollection', function () {

    var topicCollection = new TopicsCollection();
    
    it('model of collection is what expected', function () {
      expect(topicCollection.model).to.be.equal(TopicModel);
    });
    
    it('url of collection is what expected', function () {
      expect(topicCollection.url).to.be.equal('/api/v1/topics');
    });

  });
  
});
