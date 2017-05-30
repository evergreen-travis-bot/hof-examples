'use strict';

// Pass the config into the behaviour here,
// then assign the Behaviour to the step that
// requires the functionality
const Integration = require('./behaviours/api-integration')({
  uri: 'http://localhost:8080/api/integration'
});

module.exports = {
  name: 'api-integration',
  baseUrl: '/api-integration',
  steps: {
    '/name': {
      fields: ['name'],
      behaviours: Integration
    }
  }
};
