var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')


gulp.task('build', function() {
  browserify({
    entries: './src/index.js',
    extensions: ['.jsx','.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest('./build'))
})



gulp.task('default')
