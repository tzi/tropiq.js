var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");

gulp.task('uglify', function() {
    gulp.src('tropiq.js')
      .pipe(uglify())
      .pipe(rename('tropiq.min.js'))
      .pipe(gulp.dest('./'))
});

gulp.task('default', ['uglify']);