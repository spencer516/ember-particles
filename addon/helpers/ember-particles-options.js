import Ember from 'ember';
const {set, get, isEmpty} = Ember;

export function emberParticlesOptions(params) {
  let result = {};
  params.forEach((path, idx) => {
    if(idx % 2 === 0) {
      makePathIfNotExist(result, '', path.split('.'));
      set(result, path, params[idx + 1]);
    }
  });
  return result;
}

export default Ember.Helper.helper(emberParticlesOptions);

function makePathIfNotExist(obj, path, remainingParts) {
  let nextPath = remainingParts.shift();

  // If there are no remaining parts after this one, no need to proceed.
  if(remainingParts.length === 0) {
    return;
  }

  nextPath = path.length > 0 ? `${path}.${nextPath}` : nextPath;
  if(isEmpty(get(obj, nextPath))) {
    set(obj, nextPath, {});
  }

  makePathIfNotExist(obj, nextPath, remainingParts);
}
