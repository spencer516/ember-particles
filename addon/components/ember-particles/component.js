import Ember from 'ember';
const {get, on} = Ember;

/* global pJS */
export default Ember.Component.extend({
  classNames: ['ember-particles'],
  _hasElement: false,
  _particles: null,

  _setupHasElement: on('didInsertElement', function() {
    this._hasElement = true;
    this.updateParticles();
  }),

  didReceiveAttrs() {
    if(this._hasElement) {
      this.updateParticles();
    }
  },

  destroyParticles() {
    let oldParticles = this._particles;
    if(oldParticles) {
      destroyParticles(oldParticles);
      this._particles = null;
    }
  },

  updateParticles() {
    let element = get(this, 'element');

    // Destroy the old particles instance if exists.
    this.destroyParticles();

    removeChildren(element);
    createChildCanvas(element);

    this._particles = new pJS(element.id, this.getAttr('options'));
  }
});

function removeChildren(node) {
  while(node.firstChild) {
    let child = node.firstChild;
    node.removeChild(child);
  }
}

/*
  We can't use the particlesJS hook to generate a canvas as it doesn't
  return an instance of the pJS object. So, we'll do it manually.
 */
function createChildCanvas(node) {
  let canvasElement = document.createElement('canvas');
  canvasElement.className = 'particles-js-canvas-el';
  canvasElement.style.width = '100%';
  canvasElement.style.height = '100%';
  node.appendChild(canvasElement);
}

function destroyParticles(particles) {
  particles.pJS.fn.vendors.destroypJS();
}
