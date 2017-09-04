/* global assert, setup, suite, test */
require('aframe');
require('../index.js');
var entityFactory = require('./helpers').entityFactory;

suite('area-light component', function () {
  var component;
  var el;

  setup(function (done) {
    el = entityFactory();
    el.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'area-light') { return; }
      component = el.components['area-light'];
      done();
    });
    el.setAttribute('area-light', {});
  });

  suite('foo property', function () {
    test('is good', function () {
      assert.equal(1, 1);
    });
  });
});
