'use strict';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function() {
	return del(['./build/*']);
});

gulp.task('clean:production', function() {
	return del(['./web/styles', './web/fonts', './web/img', '.web/pages']);
});
