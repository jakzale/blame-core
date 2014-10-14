/*jslint node: true, indent: 2 */
'use strict';


var gulp  = require('gulp'),
    shell = require('gulp-shell'),
    del   = require('del'),
    files;

files = {
  src: 'src',
  build: 'build'
};

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('build', ['clean'], function() {
  return gulp.src(files.src + '/*.ts', {read: false})
    .pipe(shell([
      './node_modules/typescript/bin/tsc -t ES5 -m commonjs <%= file.path %> --outDir <%= out %>'
    ], {
      templateData: {
        out: files.build
      }
    }));
});

gulp.task('default', ['clean', 'build']);



// vim: set ts=2 sw=2 sts=2 et :
