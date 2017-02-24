/**
 * http://usejsdoc.org/
 */

function runcasper (grunt, options, callback) {

  grunt.log.write('runcasper.js.7() ----> options : ', options, '\n');

  var gruntspawnoptions = {
    cmd: "casperjs",
    args: options,
    grunt: false,
    stdio: 'inherit'
  };

  function doneFunction (error, result, code) {
    if (code === 0) {
      console.log("exiting successfully");
    } else {
      console.log("exiting with error");
      console.log("Error Logs-----------------------------");
      console.log(error.toString());
      console.log(result);
      console.log(code);
      console.log("Error Logs End-------------------------");
    }
    //done();
    callback(code);
  }

  grunt.log.write('runcasper.js.31() ----> gruntspawnoptions : ', gruntspawnoptions, '\n');

  var child = grunt.util.spawn(gruntspawnoptions, doneFunction);
  console.log('runcasper.runcasper() ----> child.id: ', child.id);

  child.stdout.on('data', function (buf) {
    console.log(String(buf));
  });
}

exports.run = runcasper;
