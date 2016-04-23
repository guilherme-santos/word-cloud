define(function(require) {
  
  var AppRouter = require('app/router');
  
  describe('Router', function () {

    var router = new AppRouter();
    
    it('with no default route', function () {
      expect(router.routes['']).to.be.undefined;
    });
    
    it('with route to show detail from a specifc topic', function () {
      expect(router.routes['topics/:id']).to.equal('showDetail');
    });
    
    it('history have been started only after get all topics', function () {
      Backbone.History.started = false;
      router.topicsListView.collection.on('reset', function () {
        expect(Backbone.History.started).to.be.true;
      });
    });
    
    it('render detail about specifc topic', function () {
      router.bind('route:showDetail', function(id) {
        expect(id).to.be.equal('1234__test');
        expect(router.topicDetailView).to.not.be.undefined;
      });
      
      expect(router.topicDetailView).to.be.undefined;
      router.navigate('/topics/1234__test');
    });
    
    it('if close was clicked route back to default route', function () {
      router.navigate('/topics/1234__test');
      router.bind('route:showDetail', function(id) {
        router.topicDetailView.close();
        expect(Backbone.History.getFragment()).to.equal('');
      });
    });

  });
  
});
