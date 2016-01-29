var gulp = require('gulp');
var eslint = require('gulp-eslint');

var files = ['./app/**.*.js'];

gulp.task('eslint', function () {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('default', function () {
  gulp.start('eslint');
});
