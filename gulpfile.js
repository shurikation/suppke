const gulp = require('gulp');
const uglify = require('gulp-uglify');
const autoPrefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

gulp.task('scss', function() {
  return gulp.src('src/scss/style.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoPrefixer({
        overrideBrowserslist: ['last 5 versions']
      }))
      .pipe(gulp.dest('src/css'))
});
