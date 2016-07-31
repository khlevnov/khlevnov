const gulp = require('gulp'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename');
    pug = require('gulp-pug');

gulp.task('views', function() {
    var fakedata = require(__dirname + '/../json/fakedata.js');

    return gulp.src('frontend/views/**/*.pug')
        .pipe(pug({
            pretty: '    ',
            locals: fakedata
        }))
        .on('error', notify.onError(function(error) {
    		return {
    			title: 'Pug error',
    			message: error.message
    		}
    	}))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('build'));
});

gulp.task('views:production', function() {
    return gulp.src('frontend/**/*.pug')
        .pipe(gulp.dest('app/Resources'));
});
