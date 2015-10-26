/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-particles',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/particles.js/particles.js');
  }
};
