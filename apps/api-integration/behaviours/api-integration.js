'use strict';

const Model = require('../models/api-integration');

// In this implementation config can be passed in when
// when the behaviour is invoked.
module.exports = (config) => {

  return superclass => class extends superclass {

    // The process method is part of the POST pipeline. For details
    // see https://github.com/UKHomeOfficeForms/hof-behaviour-hooks.
    process(req, res, next) {

      // Capture the user entered input from the session
      const attributes = {
        name: req.sessionModel.get('name')
      };

      // Define an instance of the model
      // with attributes and config (uri)
      const model = new Model(attributes, config);

      // Call `save` to connect to the
      // remote API and POST the attributes
      model.save()
        .then(() => {
          // Call the `process` on the parent
          // Model to resolve the request
          super.process(req, res, next)
        })
        .catch(err => {
          // Catch all errors and pass them to the
          // next piece of middleware in the stack
          next(err)
        })
    }

  };

};
