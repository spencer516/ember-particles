import { emberParticlesOptions } from 'ember-particles/helpers/ember-particles-options';
import { module, test } from 'qunit';

module('Unit | Helper | ember particles options');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = emberParticlesOptions([], {});
  assert.ok(result);
});

test('it converts paths into an object based on those paths', function(assert) {
  let result;

  result = emberParticlesOptions([
    'test', true,
    'test1.nested', true,
    'test2.nested.deeper', true,
    'test3.howdy', true,
    'test3.maude', true,
    'test3.deeper.sprite', true,
    'test3.deeper.happy', true
  ]);
  assert.deepEqual(result, {
    test: true,
    test1: {nested: true},
    test2: {nested: {deeper: true}},
    test3: {
      howdy: true,
      maude: true,
      deeper: {
        sprite: true,
        happy: true
      }
    }
  }, 'it creates the depth correctly');
});
