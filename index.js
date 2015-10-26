var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-particles',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/particles.js/particles.js');
  }
};
