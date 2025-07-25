const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

const paths = {
  scss: './css/scss/**/*.scss',
  css: './css',
}

// Compile SCSS
function styles() {
  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream())
}

// Watch files
function watch() {
  browserSync.init({
    proxy: 'http://amp-jr-blocks.local', // Change to your local WP dev URL
    notify: false,
  })
  gulp.watch(paths.scss, styles)
  gulp.watch('./**/*.php').on('change', browserSync.reload)
}

exports.styles = styles
exports.watch = watch
exports.default = gulp.series(styles, watch)
