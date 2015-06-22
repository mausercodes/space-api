var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');
	jshint = require('gulp-jshint'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	return gulp.src('css/*.scss')
		.pipe(sass({
			'sourcemap=none': true,
			errLogToConsole: true
		}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
	gulp.watch('css/*.scss', ['styles']);
	gulp.watch('*.js', ['jshint']);
});

gulp.task('jshint', function(){
	return gulp.src('*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['styles', 'jshint', 'watch']);