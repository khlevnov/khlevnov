'use strict';

const gulp = require('gulp');

gulp.task('fonts', function() {
	return gulp.src('frontend/fonts/**')
		.pipe(gulp.dest('build/fonts'));
});

gulp.task('images', function() {
	return gulp.src('frontend/img/**')
		.pipe(gulp.dest('build/img'));
});

gulp.task('pages', function() {
	return gulp.src('frontend/pages/**')
		.pipe(gulp.dest('build'));
});

gulp.task('scripts', function() {
	return gulp.src('frontend/scripts/**')
		.pipe(gulp.dest('build/scripts'));
});

gulp.task('assets',
	gulp.parallel('fonts', 'pages', 'images', 'scripts')
);

gulp.task('fonts:production', function() {
	return gulp.src('frontend/fonts/**')
		.pipe(gulp.dest('web/fonts'));
});

gulp.task('images:production', function() {
	return gulp.src('frontend/img/**')
		.pipe(gulp.dest('web/img'));
});

gulp.task('pages:production', function() {
	return gulp.src('frontend/pages/**')
		.pipe(gulp.dest('web/pages'));
});

gulp.task('scripts:production', function() {
	return gulp.src('frontend/scripts/**')
		.pipe(gulp.dest('web/scripts'));
});

gulp.task('assets:production',
	gulp.parallel('fonts:production', 'pages:production', 'images:production', 'scripts:production')
);
