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

gulp.task('api', function () {
  return gulp.src('src/youtube.api.js')
      .pipe(uglify())
      .pipe(gulp.dest('src/api'))
});

// gulp.task('js', function() {
//   return gulp.src([
//     'node_modules/slick-carousel/slick/slick.js',
//     'node_modules/wow.js/dist/wow.js'
//   ])
//       .pipe(concat('libs.min.js'))
//       .pipe(uglify())
//       .pipe(gulp.dest('src/js'))
//       .pipe(browserSync.reload({stream: true}))
// });


