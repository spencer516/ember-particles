# Ember-particles

This provides an Ember component around [Particles.js](https://github.com/VincentGarreau/particles.js/). 

## Usage

This will get you Particle.js' default options:

```handlebars
{{ember-particles}}
```

To customize, use the `ember-particles-options` helper (using the options in the Particle.js README:

```handlebars
{{ember-particles
  options=(ember-particles-options
    'particles.number.value' 2
    'particles.number.density.enable' true
    'particles.line_linked.width' 1
  )
}}
```

## Installation

* ember install ember-particles

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
