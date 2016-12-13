#!/usr/bin/env node

var argv = require('yargs').argv;
var prompt = require('prompt');
var fs = require('fs');

var help = require('./app/help');
var zipFile = require('./app/zipfile');
var csvToJson = require('./app/csvToJson');

if (argv.help) {
  help();
}

if (argv.file) {
  zipFile(argv.file);
}

if (argv.csv) {
  csvToJson(argv.csv);
}

prompt.override = argv;
prompt.message = prompt.delimiter = '';
prompt.start();

prompt.get('name', function (err, res) {
  printHelloMessage(res.name);
});

function printHelloMessage(name) {
  console.log('Hello ' + name);
  process.stdout.write('Hello ' + name + ' Again!\n');
}
