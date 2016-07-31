'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync', function() {
	browserSync.init({
		host: 'build.khlevnov.localhost',
		open: 'external',
		proxy: 'build.khlevnov.localhost',
		notify: false
	});
	browserSync.watch([
		'build/*.html',
		'build/styles/styles.css',
		'build/js/app.js',
	]).on('change', browserSync.reload);
});
