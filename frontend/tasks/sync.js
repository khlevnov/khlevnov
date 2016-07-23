'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync', function() {
	browserSync.init({
		host: 'frontend.kinkstore.localhost',
		open: 'external',
		proxy: 'frontend.kinkstore.localhost',
		notify: false
	});
	browserSync.watch([
		'frontend/pages/*.*',
		'build/styles/styles.css',
	]).on('change', browserSync.reload);
});

gulp.task('sync:production', function() {
	browserSync.init({
		host: 'www.kinkstore.localhost',
		open: 'external',
		proxy: 'www.kinkstore.localhost',
		notify: false
	});
	browserSync.watch('web/styles/styles.css').on('change', browserSync.reload);
});
