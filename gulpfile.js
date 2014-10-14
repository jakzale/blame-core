/*jslint node: true, indent: 2 */
'use strict';


var gulp  = require('gulp'),
    shell = require('gulp-shell'),
    del   = require('del'),
    karma = require('karma').server,
    paths;

paths = {
  src: 'src/*.ts',
  build: 'build'
};

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('build', ['clean'], function() {
  return gulp.src(paths.src, {read: false})
    .pipe(shell([
      './node_modules/typescript/bin/tsc -t ES5 -m commonjs <%= file.path %> --outDir <%= out %>'
    ], {
      templateData: {
        out: paths.build
      }
    }));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['build']);
});


// Warning, karma is a rolling task
// Secondly, there is a potential of many cache invalidations
gulp.task('karma', ['build'], function() {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
  });
});

gulp.task('default', ['watch', 'karma']);



// vim: set ts=2 sw=2 sts=2 et :
