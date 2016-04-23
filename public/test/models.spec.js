define(function(require) {
  
  var TopicModel = require('models/topic');
  
  describe('TopicModel', function () {

    var model = new TopicModel();
    model.set('popularityStep', 5);
    
    it('popularity level is 1 to negative number', function () {
      model.set('volume', -1);
      expect(model.get('popularityLevel')).to.be.equal(1);
    });
    
    it('popularity level is 1 to zero', function () {
      model.set('volume', 0);
      expect(model.get('popularityLevel')).to.be.equal(1);
    });

    it('popularity level is 1 to smaller than step', function () {
      model.set('volume', 1);
      expect(model.get('popularityLevel')).to.be.equal(1);
    });

    it('popularity level is 1 to number equal to step', function () {
      model.set('volume', 5);
      expect(model.get('popularityLevel')).to.be.equal(1);
    });
        
    it('popularity level is 2 to step + 1', function () {
      model.set('volume', 6);
      expect(model.get('popularityLevel')).to.be.equal(2);
    });

    it('popularity level is 2 to smaller than 2*step', function () {
      model.set('volume', 7);
      expect(model.get('popularityLevel')).to.be.equal(2);
    });

    it('popularity level is 2 to 2*step', function () {
      model.set('volume', 10);
      expect(model.get('popularityLevel')).to.be.equal(2);
    });
        
    it('popularity level is 3 to 2*step + 1', function () {
      model.set('volume', 11);
      expect(model.get('popularityLevel')).to.be.equal(3);
    });

    it('popularity level is 3 to smaller than 3*step', function () {
      model.set('volume', 13);
      expect(model.get('popularityLevel')).to.be.equal(3);
    });

    it('popularity level is 3 to 3*step', function () {
      model.set('volume', 15);
      expect(model.get('popularityLevel')).to.be.equal(3);
    });

    it('popularity level is 4 to 3*step + 1', function () {
      model.set('volume', 16);
      expect(model.get('popularityLevel')).to.be.equal(4);
    });

    it('popularity level is 4 to smaller than 4*step', function () {
      model.set('volume', 19);
      expect(model.get('popularityLevel')).to.be.equal(4);
    });

    it('popularity level is 4 to 4*step', function () {
      model.set('volume', 20);
      expect(model.get('popularityLevel')).to.be.equal(4);
    });
    
    it('popularity level is 5 to 4*step + 1', function () {
      model.set('volume', 21);
      expect(model.get('popularityLevel')).to.be.equal(5);
    });

    it('popularity level is 5 to smaller than 5*step', function () {
      model.set('volume', 24);
      expect(model.get('popularityLevel')).to.be.equal(5);
    });

    it('popularity level is 5 to 5*step', function () {
      model.set('volume', 25);
      expect(model.get('popularityLevel')).to.be.equal(5);
    });
    
    it('popularity level is 6 to 5*step + 1', function () {
      model.set('volume', 26);
      expect(model.get('popularityLevel')).to.be.equal(6);
    });

    it('popularity level is 6 to smaller than 6*step', function () {
      model.set('volume', 27);
      expect(model.get('popularityLevel')).to.be.equal(6);
    });

    it('popularity level is 6 to 6*step', function () {
      model.set('volume', 30);
      expect(model.get('popularityLevel')).to.be.equal(6);
    });
    
    it('popularity level is 6 to 6*step + 1', function () {
      model.set('volume', 31);
      expect(model.get('popularityLevel')).to.be.equal(6);
    });
    
    it('popularity level is 6 to bigger than 6*step', function () {
      model.set('volume', 35);
      expect(model.get('popularityLevel')).to.be.equal(6);
    });
    
    it('sentiment score color is green to score bigger than 60', function () {
      model.set('sentimentScore', 61);
      expect(model.get('sentimentScoreColor')).to.be.equal('green');
      
      model.set('sentimentScore', 70);
      expect(model.get('sentimentScoreColor')).to.be.equal('green');
    });
    
    it('sentiment score color is red to score smaller than 40', function () {
      model.set('sentimentScore', 39);
      expect(model.get('sentimentScoreColor')).to.be.equal('red');
      
      model.set('sentimentScore', 20);
      expect(model.get('sentimentScoreColor')).to.be.equal('red');
    });
    
    it('sentiment score color is gray to score between 40 and 60', function () {
      model.set('sentimentScore', 40);
      expect(model.get('sentimentScoreColor')).to.be.equal('grey');
      
      model.set('sentimentScore', 60);
      expect(model.get('sentimentScoreColor')).to.be.equal('grey');
      
      model.set('sentimentScore', 50);
      expect(model.get('sentimentScoreColor')).to.be.equal('grey');
    });
    
  });
  
});
