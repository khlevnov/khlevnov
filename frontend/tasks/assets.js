'use strict';

const gulp = require('gulp');

gulp.task('fonts', function() {
	return gulp.src('frontend/assets/fonts/**')
		.pipe(gulp.dest('build/fonts'));
});

gulp.task('images', function() {
	return gulp.src('frontend/assets/images/**')
		.pipe(gulp.dest('build/images'));
});

gulp.task('media', function() {
	return gulp.src('frontend/assets/media/**')
		.pipe(gulp.dest('build/media'));
});

gulp.task('assets',
	gulp.parallel('fonts', 'images', 'media')
);

gulp.task('fonts:production', function() {
	return gulp.src('frontend/assets/fonts/**')
		.pipe(gulp.dest('public_html/fonts'));
});

gulp.task('images:production', function() {
	return gulp.src('frontend/assets/images/**')
		.pipe(gulp.dest('public_html/images'));
});

gulp.task('media:production', function() {
	return gulp.src('frontend/assets/media/**')
		.pipe(gulp.dest('public_html/media'));
});

gulp.task('assets:production',
	gulp.parallel('fonts:production', 'images:production', 'media:production')
);
