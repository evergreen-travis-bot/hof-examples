API Integration
================

This simple and contrived example demonstrates how to integrate a HOF application with a remote web service.

## Explained

The front end form asks a user to enter his or her name in a text field. When the user submits the form the `name` he or she entered is POST'ed to the server.

On the server the custom Behaviour instantiates a new instance of HOF-Model with the data (`name`) and config settings (`uri`).

`model.save` connects to the remote API and POST's the attributes (`name`), returning a promise, which resolves the request by calling `process on the parent model.

