'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./frontend/tasks');

gulp.task('watch', function() {
	gulp.watch([
        'frontend/sass/**/*.scss',
        'frontend/blocks/**/*.scss',
    ], gulp.series('sass'));
	gulp.watch('frontend/views/**/*.pug', gulp.series('views'));
});

gulp.task('build',
	gulp.parallel(
        'sass',
        'views',
        'assets'
    )
);

gulp.task('production',
	gulp.parallel(
        'sass:production',
        'views:production',
        'assets:production'
    )
);

gulp.task('default',
	gulp.series('clean', 'build', gulp.parallel('watch', 'sync'))
);
