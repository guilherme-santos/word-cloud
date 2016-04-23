define(function(require) {
  'use strict';

  var TopicsListView = require('views/topics/list');
  var TopicDetailView = require('views/topics/detail');
  var TopicModel = require('models/topic');

  describe('TopicListView', function () {

    var listView = new TopicsListView();

    it('before render collection is empty', function () {
      expect(listView.collection.length).to.be.equal(0);
    });

    it('after read topics from server set right step for each topic', function () {
      listView.collection.add([
        {volume: 162},
        {volume: 100},
        {volume: 50},
      ]);

      listView.fetchSuccess();
      expect(listView.collection.at(0).get('popularityStep')).to.be.equal(27);
      expect(listView.collection.at(1).get('popularityStep')).to.be.equal(27);
      expect(listView.collection.at(2).get('popularityStep')).to.be.equal(27);
    });

    it('after read topics hide loading text', function () {
      listView.loading = $('<p/>');
      $('body').append(listView.loading);

      expect(listView.loading.is(':visible')).to.be.true;
      listView.fetchSuccess();
      expect(listView.loading.is(':visible')).to.be.false;
    });

    it('calling render for the first time cause loading to be visible', function () {
      listView.collection.reset();
      listView.loading = $('<p/>');
      $('body').append(listView.loading);
      listView.loading.hide();

      expect(listView.loading.is(':visible')).to.be.false;
      listView.render();
      expect(listView.loading.is(':visible')).to.be.true;
    });

    it('calling render for the first time load topics froms server', function () {
      listView.collection.reset(null);
      expect(listView.collection.length).to.be.equal(0);
      listView.collection.fetch = function(options) {
        expect(options).to.have.property('reset');
        expect(options.reset).to.be.true;
        listView.collection.reset([
          {volume: 162},
          {volume: 100},
          {volume: 50},
        ]);
      };

      listView.collection.on('reset', function() {
        expect(this.length).to.be.equal(3);
      });
      listView.render();
    });

  });

  describe('TopicListView', function () {

    var detailView = new TopicDetailView({
      el: $('<div/>'),
      model: new TopicModel({label: 'My Test'}),
    });

    detailView.template = _.template('<p>Detail of <strong><%= topic.label %></strong></p>');

    it('render write to some html', function () {
      detailView.render();
      expect(detailView.$el.text()).not.to.be.empty;
    });

    it('close clear any html', function () {
      detailView.render();
      expect(detailView.$el.text()).not.to.be.empty;
      detailView.close();
      expect(detailView.$el.text()).to.be.empty;
    });

    it('close trigger close event', function () {
      var control = 1;
      detailView.on('close', function() {
        expect(control).to.be.equal(2);
      });
      control++;
      detailView.close();
    });

  });

});
