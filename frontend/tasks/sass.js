'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const combiner = require('stream-combiner2').obj;
const mergeMediaQueries = require('gulp-merge-media-queries');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const requireDir = require('require-dir');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
	return combiner(
		gulp.src('frontend/sass/index.scss'),
		sourcemaps.init(),
		sass({
			includePaths: [
				require('node-normalize-scss').includePaths,
			]
		}),
		rename('styles.css'),
		sourcemaps.write('.'),
		gulp.dest('build/styles')
	).on('error', notify.onError(function(error) {
		var line = error.message.match(/on line \d+/m) + ' of file ' + error.message.match(/[-._a-z\/\\]+\n/i);
		var message = error.message.match(/Error: .+\n/);
		return {
			title: 'Sass error ' + line,
			message: message
		}
	}));
});

gulp.task('sass:production', function() {
	return combiner(
		gulp.src('frontend/sass/index.scss'),
		sass({
			includePaths: [
				require('node-normalize-scss').includePaths,
				'./node_modules/breakpoint-sass/stylesheets',
				'./node_modules/susy/sass',
				'./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss',
			]
		}),
		rename('styles.css'),
		mergeMediaQueries(),
		autoprefixer({browsers: ['last 5 versions']}),
		cleanCSS(),
		rename('styles.css'),
		gulp.dest('web/styles')
	);
});
