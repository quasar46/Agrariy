"use strict";

const gulp = require("gulp");
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const server = require("browser-sync").create();
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const del = require("del");
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;

gulp.task("pug", function () {
    return gulp.src("src/pug/*.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("build"));
})

gulp.task("css", function () {
    return gulp.src("src/scss/styles.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        // .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build/css"));
});

// gulp.task('fancycss', function () {
//     return gulp.src('src/scss/utils/jquery.fancybox4.css')
//         .pipe(gulp.dest('build/css'))
// })

// gulp.task('vendor', function () {
//     return gulp.src("src/scss/vendor/*.*")
//         .pipe(gulp.dest("build/css"))
// });

gulp.task("js", function () {
    return gulp.src("src/js/*.js")
        .pipe(sourcemaps.init())
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("build/js"));
});

gulp.task("img", function () {
    return gulp.src("src/img/**/*.*")
        .pipe(gulp.dest("build/img"));
});

gulp.task("fancycss", function () {
    return gulp.src("src/scss/utils/jquery.fancybox.min.css")
        .pipe(gulp.dest("build/css/"));
});

gulp.task("fonts", function () {
    return gulp.src([
            "src/fonts/**/*.{woff,woff2,css}",
        ], {
            base: "src"
        })
        .pipe(gulp.dest("build/"));
});

gulp.task("server", function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
    gulp.watch("src/scss/**/*.scss", gulp.series("css", "refresh"));
    gulp.watch("src/pug/**/*.pug", gulp.series("pug", "refresh"));
    gulp.watch("src/js/*.js", gulp.series("js", "refresh"));
    gulp.watch("src/img/**/*.*", gulp.series("img", "refresh"));
    gulp.watch("src/fonts/**/*.*", gulp.series("fonts", "refresh"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("clean", function () {
    return del("build");
});

gulp.task("build", gulp.series("clean", "fonts", "css", "fancycss", "img", "pug", "js"));
gulp.task("start", gulp.series("clean", "build", "server"));