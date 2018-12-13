var gulp = require("gulp")
var cleanCSS = require("gulp-clean-css")
var sass = require("gulp-sass")
var babel = require("gulp-babel")
var uglify = require("gulp-uglify")
var autoprefixer = require("gulp-autoprefixer")
var imagemin = require("gulp-imagemin")
var pngquant = require("imagemin-pngquant")

sass.compiler = require("node-sass")

// COPY HTML
gulp.task("copyHtml", () => {
  gulp.src("src/*.html").pipe(gulp.dest("dist/"))
})

// COMPILE SCSS, MINIFY CSS & ADD Pre-FIXER for CSS
gulp.task("sass", () => {
  gulp
    .src("src/scss/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css/"))
})

// COMPILE BABEL to ES5 and minify JS code
gulp.task("scripts", () => {
  gulp
    .src("src/scripts/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist/scripts/"))
})

// MINIFY IMAGES
gulp.task("imagesMin", function() {
  gulp
    .src("src/assets/images/**/*")
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
      })
    )
    .pipe(gulp.dest("dist/assets/images/"))

  gulp.src("src/assets/SVG/*.svg").pipe(gulp.dest("dist/assets/SVG/"))
})

// WATCH
gulp.task("watch", () => {
  gulp.watch("src/*.html", ["copyHtml"])
  gulp.watch("src/scss/**/**/**/*.scss", ["sass"])
  gulp.watch("src/scripts/**/*.js", ["scripts"])
  gulp.watch("src/images/**/*", ["imagesMin"])
})

gulp.task("build", ["copyHtml", "sass", "scripts", "imagesMin"])

// DEFAULT
gulp.task("default", ["watch"])
