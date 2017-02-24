/*
 * grunt-web-regression
 * https://github.com/FidelityInternational/WebUIRegression
 *
 * Copyright (c) 2017 Tirtha Guha
 * Licensed under the MIT license.
 */

'use strict';

var runcasper = require('./runcasper');

module.exports = function(grunt) {

  grunt.registerTask('web_regression', 'web ui regression reference creation', function () {
    var options = this.options();
    var done = this.async();
    //grunt.log.write('web_regression.js.55() ----> options : ', options, '\n');
    var imagepath = options.imageDirectory + options.browser; //TODO: add testname in the path
    var launchOptions = options.casperOptions.concat(["--testname=" + options.testname, "--mode=reference", "--browser=" + options.browser,
      "--url=" + options.url, "--script=" + options.scriptfile, "casperStarter.js"]);
    //grunt.log.write('web_regression.js.59() ----> launchOptions : ', launchOptions, '\n');

    console.log('runcasper.runcasper() ----> grunt.cwd: ', process.cwd());

    runcasper.run(grunt, launchOptions, function(error){
      // done();
      if(error===0) {
        done();
      } else {
        done(false);
      }
    });
  });

};
