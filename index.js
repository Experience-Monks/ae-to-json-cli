#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

// this is done because the "after-effects" module doesnt resolve paths properly
// such a pain.
require('app-module-path').addPath(path.join(__dirname, 'node_modules'));

var ae = require('after-effects-transpiled');
var aeToJSON = require('ae-to-json/after-effects');

ae.execute(aeToJSON)
.then(function(json) {
  output(json);
})
.catch(function(e) {
  throw e;
});

function output(json) {
  var jsonString = JSON.stringify(json, null, '  ');

  process.stdout.write(jsonString);
}