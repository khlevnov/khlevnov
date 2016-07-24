const gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('views', function() {
    return gulp.src('frontend/views/**/*.pug')
        .pipe(pug({
            pretty: '    ',
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('views:production', function() {
    return gulp.src('frontend/views/**/*.pug')
        .pipe(gulp.dest('app/Resources/views'));
});
