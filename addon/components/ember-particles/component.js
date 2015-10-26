import Ember from 'ember';
const {get, on} = Ember;

/* global particlesJS */
export default Ember.Component.extend({
  classNames: ['ember-particles'],
  _hasElement: false,

  _setupHasElement: on('didInsertElement', function() {
    this._hasElement = true;
    this.updateParticles();
  }),

  didReceiveAttrs() {
    if(this._hasElement) {
      this.updateParticles()
    }
  },

  updateParticles() {
    particlesJS(get(this, 'element.id'), this.getAttr('options'));
  }
});
