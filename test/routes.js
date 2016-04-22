/* jshint node: true */

var request = require('supertest');  

(function () {
  'use strict';
  
  describe('Routes', function() {
    var url = 'http://localhost:3000';

    describe('Index', function() {
      
      it('should return status 200 getting index page', function(done) {
        request(url).get('/').expect(200, done);
      });
      
      it('should return status 404 getting invalid page', function(done) {
        request(url).get('/invalid').expect(404, done);
      });
      
    });
    
    describe('Topics', function() {
      
      var topics = require('../topics.json').topics;
      
      it('should return status 200 and all topics as json', function(done) {
        request(url).get('/api/v1/topics')
          .expect('Content-Type', /json/)
          .expect(200, topics, done);
      });
      
      it('should return status 200 and berlin topic', function(done) {
        request(url).get('/api/v1/topics/1751295897__Berlin')
          .expect('Content-Type', /json/)
          .expect(200, topics[0], done);
      });
      
      it('should return status 404 getting invalid topic', function(done) {
        request(url).get('/api/v1/topics/123__invalid').expect(404, done);
      });
      
    });
  });  
})();
