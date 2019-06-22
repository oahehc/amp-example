const gulp = require('gulp');
const browserSync = require('browser-sync');
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
    .pipe($.autoprefixer())
    .pipe(gulp.dest('.tmp'))
    .pipe(
      browserSync.reload({
        stream: true,
      }),
    );
});

gulp.task('style', () => {
  return gulp
    .src('index.html')
    .pipe(
      $.replace(/<!-- scss -->/g, function() {
        const style = fs.readFileSync(`./.tmp/index.css`, 'utf8');
        return '<style amp-custom>' + style.replace(/\n/g, '') + '</style>';
      }),
    )
    .pipe(gulp.dest('.tmp'));
});

gulp.task(
  'serve',
  gulp.series('parserScss', 'style', () => {
    browserSync({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['.tmp'],
      },
    });

    gulp.watch(['index.html']).on('change', browserSync.reload);
    gulp
      .watch('index.scss', gulp.series('parserScss', 'style'))
      .on('change', browserSync.reload);
  }),
);
