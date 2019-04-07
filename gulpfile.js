const gulp = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const gulpLoadPlugins = require('gulp-load-plugins');
const replace = require('gulp-replace');
const fs = require('fs');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp
    .src('examples/styles/*.scss')
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
    .pipe(
      $.autoprefixer({
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
      }),
    )
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(
      reload({
        stream: true,
      }),
    );
});

gulp.task('clean', del.bind(null, ['.tmp']));

gulp.task('replaceScss', () => {
  return gulp
    .src('examples/*with-scss.html')
    .pipe(
      replace(/<!-- (.*).scss -->/g, function(s, filename) {
        const style = fs.readFileSync(`./.tmp/styles/${filename}.css`, 'utf8');
        return '<style amp-custom>' + style.replace(/\n/g, '') + '</style>';
      }),
    )
    .pipe(gulp.dest('.tmp'));
});

gulp.task(
  'serve',
  gulp.series('clean', 'styles', 'replaceScss', () => {
    browserSync({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['.tmp', 'examples'],
      },
    });

    gulp.watch(['examples/*.html']).on('change', reload);
    gulp
      .watch('examples/styles/*.scss', gulp.series('styles', 'replaceScss'))
      .on('change', reload);
  }),
);
