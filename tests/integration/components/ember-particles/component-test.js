import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-particles', 'Integration | Component | ember particles', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{ember-particles}}`);
  assert.equal(this.$('canvas').length, 1, 'particles was initialized');

  this.render(hbs`{{ember-particles
    options=(ember-particles-options
      'particles.number.value' 10
      'particles.size.value' 3
    )
  }}`);
  assert.equal(this.$('canvas').length, 1, 'particles was initialized with options');
});

test('it destroys and recreates canvas on option change', function(assert) {
  this.set('numParticles', 10);
  this.render(hbs`{{ember-particles
    options=(ember-particles-options
      'particles.number.value' numParticles
      'particles.size.value' 3
    )
  }}`);

  let ogCanvas = this.$('canvas')[0];
  this.set('numParticles', 15);
  assert.ok(ogCanvas !== this.$('canvas')[0], 'a new canvas was created');
});
