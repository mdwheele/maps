var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var partialify = require('partialify');
var vueify = require('vueify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    var stylesheets = [
        'resources/assets/sass/**/*.scss',
    ];

    gulp.src(stylesheets)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/css'))
});

gulp.task('fonts', function() {
    var fonts = [
        'node_modules/bootstrap/public/fonts/*',
        'node_modules/font-awesome/fonts/*'
    ];

    gulp.src(fonts)
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('js', function() {
    browserify({
        entries: './resources/assets/js/main.js',
        debug: true
    })
        .transform(vueify)
        .transform(partialify)
        .bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'))
});

gulp.task('watch:js', function() {
    gulp.watch([
        'resources/assets/js/**/*.*'
    ], ['js']);
});

gulp.task('watch:sass', function() {
    gulp.watch('resources/assets/sass/**/*.*', ['sass']);
});

gulp.task('compile', ['sass', 'fonts', 'js']);
gulp.task('watch', ['compile', 'watch:js', 'watch:sass']);
gulp.task('default', ['compile']);