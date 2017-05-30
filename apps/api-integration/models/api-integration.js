'use strict';

// https://github.com/UKHomeOfficeForms/hof-model
const Model = require('hof-model');

// Extend from `hof-model` with your
// required functionality
module.exports = class MyModel extends Model {

  // Set `url` to return the uri setting
  url() {
    return this.options.uri;
  }

  // Over-riding the response function here
  // so no errors are shown on form submission.
  handleResponse(response, callback) {
    callback(null, null, 201)
  }

};
