'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./frontend/tasks');

gulp.task('watch', function() {
	gulp.watch('sass/**/*.*', gulp.series('sass'));
	gulp.watch('pages/*.*', gulp.series('pages'));
	gulp.watch('js/*.*', gulp.series('scripts'));
});

gulp.task('build',
	gulp.parallel('sass', 'assets')
);

gulp.task('build:production',
	gulp.parallel('sass:production', 'assets:production')
);

gulp.task('default',
	gulp.series('clean', 'build', gulp.parallel('watch', 'sync'))
);
