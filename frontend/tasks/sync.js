'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync', function() {
	browserSync.init({
		host: 'khlevnov.localhost',
		open: 'external',
		proxy: 'khlevnov.localhost',
		notify: false
	});
	browserSync.watch([
		'build/*.html',
		'build/styles/styles.css',
	]).on('change', browserSync.reload);
});
