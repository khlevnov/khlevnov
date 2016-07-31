const gulp = require('gulp'),
    named = require('vinyl-named'),
    webpack = require('webpack-stream'),
    config = require('../../webpack.config.js');

gulp.task('webpack', function() {
    config.watch = false;

    return gulp.src([
            'frontend/js/app.js'
        ])
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest('build/js'));
});

gulp.task('webpack:watch', function() {
    config.watch = true;

    return gulp.src([
            'frontend/js/app.js'
        ])
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest('build/js'));
});

gulp.task('webpack:production', function() {
    config.watch = false;

    return gulp.src([
            'frontend/js/app.js'
        ])
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest('public_html/js'));
});
