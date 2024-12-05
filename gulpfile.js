import gulp from "gulp";
import sassModule from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(sassModule);
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import terser from "gulp-terser";
import browserSync from "browser-sync";
import htmlmin from "gulp-htmlmin";

//const bs = browserSync.create();

const paths = {
  html: "./src/*.html",
  styles: "./src/styles/**/*.scss",
  scripts: "./src/js/**/*.js",
  images: "./src/images/**/*.{png,jpg,jpeg,gif,svg,webp}",
  dist: "./dist",
};

function html() {
  return gulp
    .src(paths.html)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
}

function styles() {
  return gulp
    .src(paths.styles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${paths.dist}/css`))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src(paths.scripts)
    .pipe(terser())
    .pipe(gulp.dest(`${paths.dist}/js`))
    .pipe(browserSync.stream());
}

function images() {
  return gulp
    .src(paths.images)
    .pipe(gulp.dest(`${paths.dist}/images`))
    .on("end", () => {
      console.log("Images copied to dist/images");
    });
}

function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dist,
    },
  });

  gulp.watch(paths.html, html);
  gulp.watch(paths.styles, styles);
  gulp.watch(paths.scripts, scripts);
  gulp.watch(paths.images, images);
}

export default gulp.series(gulp.parallel(html, styles, scripts, images), serve);
