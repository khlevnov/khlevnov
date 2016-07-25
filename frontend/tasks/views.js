const gulp = require('gulp'),
    notify = require('gulp-notify');
    pug = require('gulp-pug');

gulp.task('views', function() {
    var fakedata = require(__dirname + '/../json/fakedata.json');

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
        .pipe(gulp.dest('build'));
});

gulp.task('views:production', function() {
    return gulp.src('frontend/**/*.pug')
        .pipe(gulp.dest('app/Resources'));
});
