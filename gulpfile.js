const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpAutoPreFixer = require('gulp-autoprefixer');
const paths = {
  scss: {
    src: ['./src/**/*.scss', '!./src/**/_*.scss'],
    dest: './public/assets/css'
  }
};

gulp.task('scss', e => {
  return gulp
    .src(paths.scss.src, { base: 'src/scss' })
    .pipe(
      gulpSass({
        outputStyle: 'compressed'
      })
    )
    .pipe(gulpAutoPreFixer())
    .pipe(gulp.dest(paths.scss.dest));
});

gulp.task('default', () => {
  gulp.watch(paths.scss.src, gulp.series('scss'));
});
