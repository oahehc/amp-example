const gulp = require('gulp');
const fs = require('fs');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

gulp.task('parserScss', () => {
  return gulp
    .src('index.scss')
    .pipe($.plumber())
    .pipe(
      $.sass
        .sync({
          outputStyle: 'expanded',
          precision: 10,
          includePaths: ['.'],
        })
        .on('error', $.sass.logError),
    )
    .pipe(gulp.dest('.tmp'));
});

gulp.task(
  'style',
  gulp.series('parserScss', () => {
    return gulp
      .src('index.html')
      .pipe(
        $.replace(/<!-- scss -->/g, function() {
          const style = fs.readFileSync(`./.tmp/index.css`, 'utf8');
          return '<style amp-custom>' + style.replace(/\n/g, '') + '</style>';
        }),
      )
      .pipe(gulp.dest('.tmp'));
  }),
);
