'use strict';

const gulp = require('gulp'),
    notify = require('gulp-notify'),
    pug = require('gulp-pug');

gulp.task('pug', function() {
	return gulp.src('frontend/pages/**/*.pug')
        .pipe(pug({
            pretty: '    ',
        }))
		.pipe(gulp.dest('build'));
});
